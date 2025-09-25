  import { Github, Mail } from "lucide-react";
import { useState } from "react";
import btcIcon from "@/assets/btc.png";
import ethIcon from "@/assets/eth.png";
import ltcIcon from "@/assets/ltc.png";
import discordIcon from "@/assets/discord.png";

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
      icon: discordIcon,
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
      icon: btcIcon,
      label: "BTC",
      text: "1C6C21WnJAaipbEGz1nDEiqr4o3XNTPJQb",
      action: () => copyToClipboard("1C6C21WnJAaipbEGz1nDEiqr4o3XNTPJQb", "BTC")
    },
    {
      icon: ethIcon,
      label: "ETH", 
      text: "0x4258456433f8afea108f2717f06e35a1cbb74ace",
      action: () => copyToClipboard("0x4258456433f8afea108f2717f06e35a1cbb74ace", "ETH")
    },
    {
      icon: ltcIcon,
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
            © 2025 qou2. 
          </p>
          
          <div className="flex items-center gap-2">
            {quickLinks.map(({ icon, label, href, external, action }) => (
              <div key={label} className="relative group">
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-md border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    title={label}
                  >
                    {typeof icon === 'string' ? (
                      <img src={icon} alt={label} className={`opacity-60 hover:opacity-80 ${label === 'Discord' ? 'w-6 h-6' : 'w-4 h-4'}`} />
                    ) : (
                      (() => {
                        const IconComponent = icon as React.ComponentType<{ size: number; className: string }>;
                        return <IconComponent size={16} className="text-white/60 hover:text-white/80" />;
                      })()
                    )}
                  </a>
                ) : (
                  <button
                    onClick={action}
                    className="w-8 h-8 flex items-center justify-center rounded-md border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] relative"
                    title={label}
                  >
                    {typeof icon === 'string' ? (
                      <img src={icon} alt={label} className={`opacity-60 hover:opacity-80 ${label === 'Discord' ? 'w-6 h-6' : 'w-4 h-4'}`} />
                    ) : (
                      (() => {
                        const IconComponent = icon as React.ComponentType<{ size: number; className: string }>;
                        return <IconComponent size={16} className="text-white/60 hover:text-white/80" />;
                      })()
                    )}
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
