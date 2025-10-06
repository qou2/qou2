import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/downloads')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Downloads
          </button>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4">qou2 Checker Instructions</h1>
            <p className="text-muted-foreground">Complete setup and usage guide</p>
          </div>

          <div className="space-y-8">
            {/* Warning */}
            <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-destructive font-medium">
                If I have not personally given you an access key, downloading this is useless.
              </p>
            </div>

            {/* Getting Started */}
            <section className="project-card">
              <h2 className="text-2xl font-medium mb-4">Getting Started</h2>
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                <li>Download the .exe from the downloads page</li>
                <li>Extract the .exe from the .zip and make sure the file is in its own folder</li>
                <li>Run the .exe, it will initiate and create a few files</li>
                <li>Head to the register tab, and enter your access key and create your account</li>
              </ol>
            </section>

            {/* Main Interface Overview */}
            <section className="project-card">
              <h2 className="text-2xl font-medium mb-4">Main Interface Overview</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Navigation Sidebar</h3>
                  
                  <div className="space-y-3 ml-4">
                    <div>
                      <h4 className="font-medium text-sm mb-1">MAIN Section:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li><strong>Checker</strong> - Main checking interface</li>
                        <li><strong>Results</strong> - View available gamertags found</li>
                        <li><strong>Console</strong> - Real-time log of all operations</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-1">CONFIGURATION Section:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li><strong>Proxies</strong> - Manage and verify proxy list</li>
                        <li><strong>Settings</strong> - Configure delays, webhooks, and options</li>
                        <li><strong>Customize</strong> - Theme customization (colors, gradients, borders)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-1">INFO Section:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li><strong>About</strong> - Application information and features</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Proxy Setup */}
            <section className="project-card">
              <h2 className="text-2xl font-medium mb-4">Proxy Setup</h2>
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                <li>
                  Get free proxies from{" "}
                  <a 
                    href="https://proxyscrape.com/free-proxy-list" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    proxyscrape.com/free-proxy-list
                  </a>
                </li>
                <li>Get the free proxy list, and make sure to authenticate your IP in proxyscrape (IMPORTANT)</li>
                <li>Copy and paste the proxies into the proxy manager on the sidebar, and verify your proxies</li>
              </ol>
            </section>

            {/* Settings Configuration */}
            <section className="project-card">
              <h2 className="text-2xl font-medium mb-4">Settings Configuration</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Discord Webhook</h3>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Navigate to Settings page</li>
                    <li>Enter your Discord webhook URL</li>
                    <li>Click "Save Webhook"</li>
                    <li>Enable "Send webhook notification on find" in auto-save options</li>
                  </ol>
                  <div className="mt-2 p-3 bg-accent rounded border border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Format:</strong> https://discord.com/api/webhooks/your_webhook_id/your_webhook_token
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Check Delay</h3>
                  <p className="text-muted-foreground mb-2">Configure delays to avoid rate limiting:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li><strong>Min:</strong> Minimum delay between checks (0.5-10 seconds)</li>
                    <li><strong>Max:</strong> Maximum delay between checks (0.5-10 seconds)</li>
                    <li>Random delay is applied within this range for each check</li>
                  </ul>
                  <div className="mt-2 p-3 bg-accent rounded border border-border">
                    <p className="text-sm font-medium mb-1">Recommended:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Min: 1.0 seconds</li>
                      <li>Max: 2.0 seconds</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Auto-save Options</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li><strong>Auto-save available gamertags:</strong> Automatically saves found gamertags to available_gamertags.txt</li>
                    <li><strong>Send webhook notification on find:</strong> Sends Discord notification when available gamertag is found</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Viewing Results */}
            <section className="project-card">
              <h2 className="text-2xl font-medium mb-4">Viewing Results</h2>
              <div>
                <h3 className="text-lg font-medium mb-2">Results Page</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Navigate to Results from sidebar</li>
                  <li>View all available gamertags found during checks</li>
                  <li><strong>Refresh:</strong> Reload results from file</li>
                  <li><strong>Export to File:</strong> Save results to a custom location</li>
                </ul>
              </div>
            </section>

            {/* Theme Customization */}
            <section className="project-card">
              <h2 className="text-2xl font-medium mb-4">Theme Customization</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Customize Page</h3>
                
                <div className="space-y-3 ml-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Primary Color:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Enter hex color code (e.g., #ff3333)</li>
                      <li>Or click "Pick Color" to use color picker</li>
                      <li>Adjust RGB sliders for fine control</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-1">Secondary Color (Gradient):</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Set secondary color for gradient effects</li>
                      <li>Used when gradient backgrounds are enabled</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-1">Border Radius:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Adjust window corner roundness (0-30px)</li>
                      <li>0 = square corners, 30 = very rounded</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-1">Gradient Options:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Enable/disable animated gradient backgrounds</li>
                      <li>When enabled, creates dynamic color transitions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-1">Preview:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>See changes in real-time</li>
                      <li>Click "Reset to Default" to restore original theme</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Console Monitoring */}
            <section className="project-card">
              <h2 className="text-2xl font-medium mb-4">Console Monitoring</h2>
              <div>
                <h3 className="text-lg font-medium mb-2">Console Page</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>View real-time logs of all checker operations</li>
                  <li>
                    Color-coded messages:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Green: Info and success messages</li>
                      <li>Red: Errors</li>
                      <li>Orange: Warnings</li>
                      <li>Cyan: Important events</li>
                    </ul>
                  </li>
                  <li>Click "Clear Console" to remove all log entries</li>
                </ul>
              </div>
            </section>

            {/* File Management */}
            <section className="project-card">
              <h2 className="text-2xl font-medium mb-4">File Management</h2>
              <p className="text-muted-foreground mb-3">The application creates several files in its directory:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li><strong>proxies.txt</strong> - Your proxy list</li>
                <li><strong>verified_proxies.txt</strong> - Verified working proxies</li>
                <li><strong>available_gamertags.txt</strong> - All available gamertags found</li>
                <li><strong>checker.db</strong> - User database (do not delete)</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Instructions;
