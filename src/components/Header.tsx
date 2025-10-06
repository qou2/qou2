import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scrollToWork = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const workSection = document.getElementById("work");
        if (workSection) {
          workSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="text-lg font-medium text-foreground hover:text-primary-hover transition-colors duration-200"
        >
          qou2
        </button>

        <nav className="flex items-center gap-8">
          <button
            onClick={scrollToContact}
            onMouseEnter={() => setHoveredItem("contact")}
            onMouseLeave={() => setHoveredItem(null)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative"
          >
            contact
            {hoveredItem === "contact" && (
              <span className="absolute -bottom-1 left-0 w-full h-px bg-primary transition-all duration-200" />
            )}
          </button>
          
          <button
            onClick={scrollToWork}
            onMouseEnter={() => setHoveredItem("work")}
            onMouseLeave={() => setHoveredItem(null)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative"
          >
            work
            {hoveredItem === "work" && (
              <span className="absolute -bottom-1 left-0 w-full h-px bg-primary transition-all duration-200" />
            )}
          </button>

          <button
            onClick={() => navigate("/downloads")}
            onMouseEnter={() => setHoveredItem("downloads")}
            onMouseLeave={() => setHoveredItem(null)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative"
          >
            downloads
            {hoveredItem === "downloads" && (
              <span className="absolute -bottom-1 left-0 w-full h-px bg-primary transition-all duration-200" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
