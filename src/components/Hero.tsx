import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4 fade-in">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight slide-up">
            hey, i'm <span className="font-medium">qou2</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto slide-up" style={{animationDelay: '0.2s'}}>
            Full-Stack / Bot Developer
            <br />
            mostly frontend stuff with react/next.js/vite, and node.js discord bots, PostgreSQL/NoSQL 
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 slide-up" style={{animationDelay: '0.4s'}}>
          <button
            onClick={scrollToWork}
            className="portfolio-button-primary min-w-48 transform hover:scale-105 transition-transform duration-300"
          >
            check out my work
          </button>
          
          <button
            onClick={() => navigate("/xbox-accounts")}
            className="portfolio-button-secondary min-w-48 transform hover:scale-105 transition-transform duration-300"
          >
            xbox accounts i own
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
