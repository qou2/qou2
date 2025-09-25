import { Github, MessageCircle, Bitcoin, DollarSign } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const cryptoAddresses = [
    {
      symbol: "BTC",
      address: "1C6C21WnJAaipbEGz1nDEiqr4o3XNTPJQb",
      icon: Bitcoin
    },
    {
      symbol: "ETH", 
      address: "0x4258456433f8afea108f2717f06e35a1cbb74ace",
      icon: DollarSign
    },
    {
      symbol: "LTC",
      address: "MAYhW2jgVw9hXYuwjLpktVsbKJ9avPmrjH", 
      icon: DollarSign
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8 fade-in">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-light">let's talk</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              hit me up if you want to work together, need help with something, or just want to chat about code. 
              i'm usually pretty responsive unless i'm sleeping
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/qou2"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-button-primary min-w-48 flex items-center gap-3"
            >
              <Github size={18} />
              github.com/qou2
            </a>
            
            <button
              onClick={() => copyToClipboard("@whoseqou2", "Discord")}
              className="portfolio-button-secondary min-w-48 flex items-center gap-3 relative"
              style={{ borderColor: '#5865F2', color: '#5865F2' }}
            >
              <MessageCircle size={18} />
              @whoseqou2
              {copied === "Discord" && (
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-400">
                  Copied!
                </span>
              )}
            </button>
          </div>

          <div className="pt-8 space-y-4">
            <p className="text-sm text-muted-foreground">if you're feeling generous</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {cryptoAddresses.map(({ symbol, address, icon: Icon }) => (
                <button
                  key={symbol}
                  onClick={() => copyToClipboard(address, symbol)}
                  className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-sm relative"
                >
                  <Icon size={16} />
                  {symbol}
                  {copied === symbol && (
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-green-400">
                      Copied!
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;