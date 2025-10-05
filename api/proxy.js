// api/proxy.js
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const apiUrl = 'https://qou2.xo.je/api.php';
    
    // Get the request body (Vercel automatically parses it)
    const body = req.body;
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return res.status(200).json(data);
    
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}
