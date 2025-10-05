import sqlite3
import hashlib
import secrets
import requests
from datetime import datetime

class DatabaseManager:
    # Your website API endpoint
    API_URL = "https://qou2.xo.je/api.php"
    
    def __init__(self, db_file='xbox_checker.db'):
        self.db_file = db_file
        self.conn = sqlite3.connect(db_file, check_same_thread=False)
        self.conn.row_factory = sqlite3.Row
        self.init_db()

    def init_db(self):
        """Initialize database tables"""
        cursor = self.conn.cursor()

        cursor.execute('''
                       CREATE TABLE IF NOT EXISTS users (
                                                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                            username TEXT UNIQUE NOT NULL,
                                                            password_hash TEXT NOT NULL,
                                                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                                            last_login TIMESTAMP,
                                                            primary_color TEXT DEFAULT '#00ff00',
                                                            discord_webhook TEXT DEFAULT ''
                       )
                       ''')

        cursor.execute('''
                       CREATE TABLE IF NOT EXISTS statistics (
                                                                 id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                                 username TEXT NOT NULL,
                                                                 total_checked INTEGER DEFAULT 0,
                                                                 total_available INTEGER DEFAULT 0,
                                                                 total_taken INTEGER DEFAULT 0,
                                                                 total_errors INTEGER DEFAULT 0,
                                                                 last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                                                 FOREIGN KEY (username) REFERENCES users(username)
                       )
                       ''')

        cursor.execute('''
                       CREATE TABLE IF NOT EXISTS saved_logins (
                                                                   username TEXT PRIMARY KEY,
                                                                   saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                       )
                       ''')

        self.conn.commit()

    def _hash_password(self, password):
        """Hash password with salt"""
        salt = secrets.token_hex(16)
        pwd_hash = hashlib.pbkdf2_hmac('sha256', password.encode(), salt.encode(), 100000)
        return f"{salt}${pwd_hash.hex()}"

    def _verify_password(self, password, stored_hash):
        """Verify password against stored hash"""
        try:
            salt, pwd_hash = stored_hash.split('$')
            test_hash = hashlib.pbkdf2_hmac('sha256', password.encode(), salt.encode(), 100000)
            return test_hash.hex() == pwd_hash
        except:
            return False

    def validate_access_key(self, key):
        """Validate access key via web API"""
        try:
            response = requests.post(
                self.API_URL,
                json={
                    'action': 'validate_key',
                    'key': key
                },
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success'):
                    return True, data.get('message', 'Valid key')
                else:
                    return False, data.get('message', 'Invalid key')
            else:
                return False, f"Server error: {response.status_code}"
                
        except requests.exceptions.Timeout:
            return False, "Connection timeout. Please check your internet connection."
        except requests.exceptions.ConnectionError:
            return False, "Could not connect to server. Please check your internet connection."
        except Exception as e:
            return False, f"Error validating key: {str(e)}"

    def mark_key_used(self, key, username):
        """Mark an access key as used via web API"""
        try:
            response = requests.post(
                self.API_URL,
                json={
                    'action': 'use_key',
                    'key': key,
                    'username': username
                },
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                return data.get('success', False)
            return False
                
        except Exception as e:
            print(f"Error marking key as used: {e}")
            return False

    def register_user(self, username, password, access_key):
        """Register a new user"""
        if len(username) < 3:
            return False, "Username must be at least 3 characters"

        if len(password) < 6:
            return False, "Password must be at least 6 characters"

        # Validate key via web API
        valid, message = self.validate_access_key(access_key)
        if not valid:
            return False, message

        cursor = self.conn.cursor()
        cursor.execute('SELECT username FROM users WHERE username = ?', (username,))
        if cursor.fetchone():
            return False, "Username already exists"

        password_hash = self._hash_password(password)

        try:
            cursor.execute('''
                           INSERT INTO users (username, password_hash)
                           VALUES (?, ?)
                           ''', (username, password_hash))

            # Mark key as used via web API
            self.mark_key_used(access_key, username)

            cursor.execute('''
                           INSERT INTO statistics (username)
                           VALUES (?)
                           ''', (username,))

            self.conn.commit()
            return True, "Registration successful"

        except Exception as e:
            self.conn.rollback()
            return False, f"Registration failed: {str(e)}"

    def login_user(self, username, password):
        """Authenticate user"""
        cursor = self.conn.cursor()
        cursor.execute('SELECT password_hash FROM users WHERE username = ?', (username,))
        result = cursor.fetchone()

        if not result:
            return False, "Invalid username or password"

        if not self._verify_password(password, result['password_hash']):
            return False, "Invalid username or password"

        cursor.execute('''
                       UPDATE users
                       SET last_login = ?
                       WHERE username = ?
                       ''', (datetime.now(), username))
        self.conn.commit()

        return True, "Login successful"

    def save_login(self, username):
        """Save login for auto-login"""
        cursor = self.conn.cursor()
        cursor.execute('''
            INSERT OR REPLACE INTO saved_logins (username) 
            VALUES (?)
        ''', (username,))
        self.conn.commit()

    def get_saved_login(self):
        """Get saved login username"""
        cursor = self.conn.cursor()
        cursor.execute('SELECT username FROM saved_logins LIMIT 1')
        result = cursor.fetchone()
        return result['username'] if result else None

    def clear_saved_login(self, username):
        """Clear saved login"""
        cursor = self.conn.cursor()
        cursor.execute('DELETE FROM saved_logins WHERE username = ?', (username,))
        self.conn.commit()

    def get_user_settings(self, username):
        """Get user settings"""
        cursor = self.conn.cursor()
        cursor.execute('SELECT primary_color, discord_webhook FROM users WHERE username = ?', (username,))
        result = cursor.fetchone()

        if result:
            return {
                'primary_color': result['primary_color'],
                'discord_webhook': result['discord_webhook'] or ''
            }
        return {'primary_color': '#00ff00', 'discord_webhook': ''}

    def update_user_settings(self, username, primary_color=None, discord_webhook=None):
        """Update user settings"""
        cursor = self.conn.cursor()
        if primary_color:
            cursor.execute('''
                           UPDATE users
                           SET primary_color = ?
                           WHERE username = ?
                           ''', (primary_color, username))
        if discord_webhook is not None:
            cursor.execute('''
                           UPDATE users
                           SET discord_webhook = ?
                           WHERE username = ?
                           ''', (discord_webhook, username))
        self.conn.commit()

    def get_user_stats(self, username):
        """Get user statistics"""
        cursor = self.conn.cursor()
        cursor.execute('''
                       SELECT total_checked, total_available, total_taken, total_errors
                       FROM statistics
                       WHERE username = ?
                       ''', (username,))
        result = cursor.fetchone()

        if result:
            return {
                'total_checked': result['total_checked'],
                'total_available': result['total_available'],
                'total_taken': result['total_taken'],
                'total_errors': result['total_errors']
            }
        return {
            'total_checked': 0,
            'total_available': 0,
            'total_taken': 0,
            'total_errors': 0
        }

    def save_statistics(self, username, checked, available, taken, errors):
        """Update user statistics"""
        cursor = self.conn.cursor()
        cursor.execute('''
                       UPDATE statistics
                       SET total_checked = total_checked + ?,
                           total_available = total_available + ?,
                           total_taken = total_taken + ?,
                           total_errors = total_errors + ?,
                           last_updated = ?
                       WHERE username = ?
                       ''', (checked, available, taken, errors, datetime.now(), username))
        self.conn.commit()

    def change_password(self, username, old_password, new_password):
        """Change user password"""
        success, _ = self.login_user(username, old_password)
        if not success:
            return False, "Current password is incorrect"

        if len(new_password) < 6:
            return False, "New password must be at least 6 characters"

        cursor = self.conn.cursor()
        password_hash = self._hash_password(new_password)
        cursor.execute('''
                       UPDATE users
                       SET password_hash = ?
                       WHERE username = ?
                       ''', (password_hash, username))
        self.conn.commit()

        return True, "Password changed successfully"

    def close(self):
        """Close database connection"""
        self.conn.close()
