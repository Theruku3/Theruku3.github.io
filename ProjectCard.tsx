import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import TechStackTag from "./TechStackTag";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  technologies?: string[];
  onLearnMore?: () => void;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its key features. This showcases the main functionality and purpose of the application.",
  imageUrl = "https://dummyimage.com/384x216/cbd5e1/1e293b&text=Project+Preview",
  technologies = ["React", "TypeScript", "Tailwind"],
  onLearnMore = () => {},
}: ProjectCardProps) => {
  return (
    <Card className="w-96 h-[480px] bg-card hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Project Image */}
      <div className="relative w-full h-54 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[216px] object-cover"
        />
      </div>

      <CardHeader>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <TechStackTag key={index} technology={tech} />
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={onLearnMore}
          className="w-full group"
          variant="secondary"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
