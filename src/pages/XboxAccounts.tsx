import { useState } from "react";
import { ArrowLeft, Search, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const XboxAccounts = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const accounts = [
    "qou2", "j8e1", "xup8", "o7e8", "sq3m", "a8jq", "z5ws", "vl3v", "ods4", "i1hh",
    "ec40", "m9n0", "d6lj", "ti9u", "i4c2", "zbe3", "fc2p", "shf6", "yz0x", "pgb8",
    "u1t6", "wta8", "ejv5", "zu40", "t9p8", "g3i2", "l65v", "u69k", "l8xl", "n6zw",
    "v1pv", "z2fb", "m3pr", "w3jl", "r5nw", "hr1d", "dr8h", "wy3q", "dpw8", "eg6f",
    "nap2", "pd0z", "z47g", "t5ov", "q6vs", "bz6h", "u9p6", "g7jj", "y8ec", "x538",
    "g9s3", "yve4", "u4fw", "gj4j", "t8u6", "q19k", "ulk0", "mke0", "cc5v", "qd3m",
    "phe1", "f6o4", "iy1m", "i3jt", "ak8u", "lco5", "whl6", "fh2h", "fqw5", "w7jo",
    "nv9u", "ad9h", "k2p9", "x7m4", "b3n8", "f9q1", "h5r6", "j2w7", "l4y3", "n8z5",
    "p1x9", "r6v2", "s9t4", "v3u7", "w8q1", "y5e6", "z2r9", "a7i3", "c4o8", "e1p5",
    "g6s2", "akadonutt", "whoseqou2", "Zeqa S9"
  ];

  const fourCharAccounts = accounts.filter(account => 
    account.length === 4 && account.toLowerCase() !== account.toUpperCase()
  );

  const otherAccounts = accounts.filter(account => 
    account.length !== 4 || account.toLowerCase() === account.toUpperCase()
  );

  const filteredFourChar = fourCharAccounts.filter(account =>
    account.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredOther = otherAccounts.filter(account =>
    account.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyDiscord = () => {
    navigator.clipboard.writeText("@whoseqou2");
    toast({
      title: "Discord handle copied!",
      description: "@whoseqou2 has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            back
          </button>
        </div>

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-light">xbox accounts i own</h1>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div>
                <span className="text-lg font-medium text-foreground">94</span>
                <span className="ml-1">total accounts</span>
              </div>
              <div>
                <span className="text-lg font-medium text-foreground">91</span>
                <span className="ml-1">4 chars</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="bg-highlight-subtle text-highlight">
                qou2 - main
              </Badge>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="search accounts"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-accent border-accent-border"
              />
            </div>
          </div>

          <div className="grid gap-8">
            <div>
              <h2 className="text-xl font-medium mb-4">
                4-character accounts ({filteredFourChar.length})
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {filteredFourChar.map((account) => (
                  <div
                    key={account}
                    className={`p-3 rounded-lg bg-card border border-card-border text-center font-mono text-sm transition-all duration-200 hover:border-accent-border ${
                      account === "qou2" ? "bg-highlight-subtle border-highlight text-highlight" : ""
                    }`}
                  >
                    {account}
                  </div>
                ))}
              </div>
            </div>

            {filteredOther.length > 0 && (
              <div>
                <h2 className="text-xl font-medium mb-4">
                  other accounts ({filteredOther.length})
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {filteredOther.map((account) => (
                    <div
                      key={account}
                      className="p-3 rounded-lg bg-card border border-card-border text-center font-mono text-sm transition-all duration-200 hover:border-accent-border"
                    >
                      {account}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-card border border-card-border rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-medium">random facts about this collection</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <span className="font-medium text-foreground">why 4-character tags?</span>
                <br />
                they're rare, clean, and honestly just look cool. also 3-chars are like impossible to get other than buying, while these can still be sniped
              </div>
              <div>
                <span className="font-medium text-foreground">do i use them all?</span>
                <br />
                honestly? no. I give most out to those who ask :/
              </div>
            </div>
            <button
              onClick={copyDiscord}
              className="portfolio-button-secondary flex items-center gap-2 mt-4"
            >
              <Copy className="w-4 h-4" />
              contact me on discord if you're interested in selling your gamertag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XboxAccounts;
