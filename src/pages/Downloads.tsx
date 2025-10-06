import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";

const Downloads = () => {
  const downloads = [
    {
      id: "qou2-checker",
      title: "qou2 Checker",
      version: "v2.4.0",
      description: "High-performance Xbox gamertag availability checker with proxy rotation and Discord webhooks",
      file: "https://downloads.qou2.xyz/qou2-checker.zip",
      size: "36.8 MB"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Downloads</h1>
            <p className="text-muted-foreground">Download my tools and applications</p>
          </div>

          <div className="space-y-6">
            {downloads.map((item) => (
              <div key={item.id} className="project-card">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <span className="text-sm text-muted-foreground">{item.version}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    {item.size !== "TBD" && (
                      <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={item.file}
                      download
                      className="portfolio-button-primary flex items-center gap-2 justify-center whitespace-nowrap"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                    <button
                      onClick={() => window.location.href = '/instructions'}
                      className="portfolio-button-secondary flex items-center gap-2 justify-center whitespace-nowrap"
                    >
                      Instructions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-accent rounded-lg border border-border">
            <h3 className="font-medium mb-2">Note</h3>
            <p className="text-sm text-muted-foreground">
              All downloads are provided as-is. Make sure to scan files with your antivirus before running them.
              If you encounter any issues, feel free to contact me on Discord.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Downloads;
