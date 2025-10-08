import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  icon: string;
  details: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    techDetails: {
      category: string;
      items: string[];
    }[];
    stats?: {
      label: string;
      value: string;
    }[];
    liveUrl?: string;
    hasContactButton?: boolean;
  };
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const copyDiscord = () => {
    navigator.clipboard.writeText("@whoseqou2");
    toast({
      title: "Discord handle copied!",
      description: "@whoseqou2 has been copied to your clipboard.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-card-border">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-4">
            <img 
              src={project.icon} 
              alt={project.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <DialogTitle className="text-2xl font-semibold">
                {project.details.title}
              </DialogTitle>
              <p className="text-sm text-muted-foreground">
                {project.details.subtitle}
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            {project.details.description}
          </p>

          <div className="space-y-4">
            {project.details.features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-medium text-sm">{feature.split('\n')[0]}</h4>
                {feature.split('\n').slice(1).map((line, lineIndex) => (
                  <p key={lineIndex} className="text-sm text-muted-foreground ml-4">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {project.details.stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-accent rounded-lg">
              {project.details.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-semibold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-4">
            <h4 className="font-medium">Tech Stack</h4>
            <div className="grid gap-4">
              {project.details.techDetails.map((category, index) => (
                <div key={index}>
                  <h5 className="text-sm font-medium mb-2">{category.category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            {project.details.liveUrl && (
              <Button 
                asChild 
                className="portfolio-button-primary flex items-center gap-2"
              >
                <a href={project.details.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  {project.details.liveUrl.includes('mcbetiers') ? 'visit mcbetiers.com' : 
                   project.details.liveUrl.includes('milkyclan') ? 'View Live Site (milkyclan.com)' : 
                   project.details.liveUrl.includes('github.com') ? 'Open Source' :
                   project.details.liveUrl.includes('/downloads') ? 'View Downloads' : 'View Live Site'}
                </a>
              </Button>
            )}
            
            {project.details.hasContactButton && (
              <Button 
                onClick={copyDiscord}
                variant="outline"
                className="portfolio-button-secondary flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                Contact me
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
