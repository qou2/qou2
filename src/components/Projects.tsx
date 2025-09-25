import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import ProjectModal, { Project } from "./ProjectModal";
import webIcon from "@/assets/web-icon.jpg";
import botIcon from "@/assets/bot-icon.jpg";
import siteIcon from "@/assets/site-icon.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: "mcbetiers-web",
      title: "MCBETIERS Web Platform",
      subtitle: "Completely rebuilt the entire platform from scratch using vite. went from terrible html/css to a proper modern web app with better architecture and actually maintainable code.",
      description: "A comprehensive platform for Minecraft Bedrock PvP rankings",
      techStack: ["Vite", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      icon: webIcon,
      details: {
        title: "MCBE TIERS",
        subtitle: "✓ Rebuilt - Minecraft Bedrock PvP Ranking Platform",
        description: "A comprehensive, modern web application for ranking and tracking Minecraft Bedrock Edition PvP players across multiple competitive game modes. Built from the ground up with a focus on performance, scalability, and user experience.",
        features: [
          "Multi-Game Mode Rankings\nSkywars, Midfight, Crystal, Bridge, UHC, Sumo, Bedfight, Nodebuff",
          "5-Tier Ranking System\nCombat General → Combat Rookie with detailed player profiles",
          "Real-time Analytics\nDynamic leaderboards, user engagement tracking, and performance monitoring",
          "Admin Dashboard\nComprehensive management system with role-based access control",
          "Advanced Features\nSnowfall API integration, mass data import, discord bot integrations",
          "Modern Architecture\nReact 18, TypeScript, Supabase, component-driven design"
        ],
        techDetails: [
          {
            category: "Frontend",
            items: ["React 18 + TypeScript + Vite"]
          },
          {
            category: "Styling",
            items: ["Tailwind + Framer Motion"]
          },
          {
            category: "Backend",
            items: ["Supabase + PostgreSQL"]
          },
          {
            category: "Deployment",
            items: ["Vercel"]
          }
        ],
        stats: [
          { label: "game modes", value: "8+" },
          { label: "ranking system", value: "5-tier" },
          { label: "architecture", value: "modern" }
        ],
        liveUrl: "https://mcbetiers.com"
      }
    },
    {
      id: "mcbetiers-bot",
      title: "MCBETIERS Discord Bot",
      subtitle: "actually spent time on this one. handles moderation, has github integration, generates images, and got discord verification",
      description: "A comprehensive Discord bot with moderation and GitHub integration",
      techStack: ["Node.js", "Discord.js", "MongoDB", "5,566 lines", "discord.js", "verified ✓", "actually good"],
      icon: botIcon,
      details: {
        title: "MCBETIERS Discord Bot",
        subtitle: "Comprehensive server management system with Discord verification",
        description: "this bot actually took some effort to build properly. started as a simple moderation tool but ended up becoming a full-featured server management system.",
        features: [
          "moderation that works\nauto-mod, custom filters, role management",
          "github/database integration\nautomatically posts updates from repos, handles webhooks, tracks commits, pulls from database and uploads to database",
          "image generation\ncustom image gen for bi-user elo amounts",
          "24/7 uptime, 20+ commands, discord verified, need a custom bot for your server? hit me up on discord"
        ],
        techDetails: [
          {
            category: "Runtime & Framework",
            items: ["Node.js", "Discord.js v14", "MongoDB"]
          },
          {
            category: "Features",
            items: ["Auto-moderation", "GitHub Webhooks", "Image Generation", "Role Management"]
          },
          {
            category: "Stats",
            items: ["5,566 lines of code", "20+ commands", "Discord Verified", "24/7 uptime"]
          }
        ],
        hasContactButton: true
      }
    },
    {
      id: "milkyclan-web",
      title: "MilkyClan Web Platform",
      subtitle: "Number 1 Zeqa cosmetic value list, price tracker, and loan system.",
      description: "Comprehensive cosmetic tracking and trading platform for Zeqa",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      icon: siteIcon,
      details: {
        title: "MilkyClan Web Platform",
        subtitle: "Zeqa Cosmetic Value Tracker & Trading Platform",
        description: "The definitive platform for Zeqa cosmetic valuations, trade comparisons, and community management. Built with modern web technologies and a focus on user experience.",
        features: [
          "Cosmetic Value Tracker\nDynamic valuations across items, with shard/coin/USD conversions",
          "Trade Comparison Tool\nInstant fairness checks for trade offers",
          "Currency & Lending System\nZeqa coin + shard conversions and loans",
          "Discord Integration\nSync with community servers and bots",
          "Scammer and DWC lists\nScammer lists, and deal-with-caution lists",
          "Admin Dashboard\nFull control with permissions & data oversight"
        ],
        techDetails: [
          {
            category: "Frontend",
            items: ["Next.js 15", "React 19 + TypeScript 5", "Tailwind CSS 3 + Tailwind Merge + Tailwind Animate"]
          },
          {
            category: "UI Components",
            items: ["Radix UI (Dialog, Tooltip, Accordion, etc.)", "Lucide Icons + custom Mojang font usage", "Hover/transition effects with Tailwind"]
          },
          {
            category: "Backend / Data",
            items: ["Supabase (Auth, Database, SSR helpers)", "PostgreSQL (via Supabase)"]
          }
        ],
        liveUrl: "https://milkyclan.com"
      }
    },
    {
      id: "milkyclan-bot",
      title: "MilkyClan Discord Bot",
      subtitle: "Comprehensive inventory management and ranking system with proper database architecture and API integrations, as-well as easy commands to view cosmetics, values, and leaderboards.",
      description: "Advanced Discord bot for Zeqa inventory management",
      techStack: ["Node.js", "Discord.js", "Supabase", "1700+ lines", "discord verified"],
      icon: botIcon,
      details: {
        title: "MilkyClan Discord Bot",
        subtitle: "Zeqa Inventory Management & Ranking System",
        description: "Comprehensive inventory management and ranking system with proper database architecture and API integrations, as-well as easy commands to view cosmetics, values, and leaderboards.",
        features: [
          "Comprehensive inventory system that works:\nReal-time cosmetic tracking with live Zeqa API integration, calculates inventory values using conversion rates (1 shard = 12 coins, 5,000 shards = $1 USD), tracks individual player collections across capes/artifacts/projectiles/killphrases/mounts",
          "Leaderboards:\nMultiple ranking systems including value-based leaderboards, cosmetic count leaderboards (total/unique by type)",
          "Slash Commands:\n12+ slash commands with proper validation and error handling, rate limiting to prevent API abuse, admin-only commands with permission checking, interactive search functionality across cosmetic database, bulk operations with live progress tracking, autorole system that assigns Discord roles based on inventory achievements.",
          "Database and API integration:\nSupabase integration for user inventories and cosmetic pricing data, Zeqa API calls for live player data with owner count tracking, cosmetic exclusion system for value calculations, automated refresh system for keeping data current"
        ],
        techDetails: [
          {
            category: "Core Technologies",
            items: ["Node.js", "Discord.js v14", "Supabase", "PostgreSQL"]
          },
          {
            category: "API Integration",
            items: ["Zeqa Live API", "Real-time Data Sync", "Rate Limiting", "Error Handling"]
          },
          {
            category: "Features",
            items: ["12+ Slash Commands", "Autorole System", "Live Progress Tracking", "Admin Controls"]
          },
          {
            category: "Stats",
            items: ["1700+ lines of code", "Discord Verified", "Real-time inventory tracking"]
          }
        ],
        hasContactButton: true
      }
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="work" className="py-20 px-6 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">stuff i've built</h2>
          <p className="text-muted-foreground">here's some projects</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={project.icon} 
                  alt={project.title}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-lg leading-tight mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {project.subtitle}
              </p>
              
              <button
                onClick={() => openModal(project)}
                className="text-sm text-primary hover:text-primary-hover transition-colors duration-200 font-medium"
              >
                learn more →
              </button>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;