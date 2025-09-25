import { Github, MessageCircle, Mail, Bitcoin, DollarSign } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const quickLinks = [
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/qou2",
      external: true
    },
    {
      icon: MessageCircle,
      label: "Discord",
      text: "@whoseqou2",
      action: () => copyToClipboard("@whoseqou2", "Discord")
    },
    {
      icon: Mail,
      label: "Email",
      text: "vajkthevajk@gmail.com", 
      action: () => copyToClipboard("vajkthevajk@gmail.com", "Email")
    },
    {
      icon: Bitcoin,
      label: "BTC",
      text: "1C6C21WnJAaipbEGz1nDEiqr4o3XNTPJQb",
      action: () => copyToClipboard("1C6C21WnJAaipbEGz1nDEiqr4o3XNTPJQb", "BTC")
    },
    {
      icon: DollarSign,
      label: "ETH", 
      text: "0x4258456433f8afea108f2717f06e35a1cbb74ace",
      action: () => copyToClipboard("0x4258456433f8afea108f2717f06e35a1cbb74ace", "ETH")
    },
    {
      icon: DollarSign,
      label: "LTC",
      text: "MAYhW2jgVw9hXYuwjLpktVsbKJ9avPmrjH", 
      action: () => copyToClipboard("MAYhW2jgVw9hXYuwjLpktVsbKJ9avPmrjH", "LTC")
    }
  ];

  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <p className="text-xs text-white/40">
            © 2024 qou2. Built with React + Vite + Tailwind
          </p>
          
          <div className="flex items-center gap-2">
            {quickLinks.map(({ icon: Icon, label, href, external, action }) => (
              <div key={label} className="relative group">
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] block"
                    title={label}
                  >
                    <Icon size={14} className="text-white/60 hover:text-white/80" />
                  </a>
                ) : (
                  <button
                    onClick={action}
                    className="p-2 rounded-md border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] relative"
                    title={label}
                  >
                    <Icon size={14} className="text-white/60 hover:text-white/80" />
                    {copied === label && (
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-green-400 whitespace-nowrap">
                        Copied!
                      </span>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;