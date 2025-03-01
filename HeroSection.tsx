import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  summary?: string;
  onCallToAction?: () => void;
}

const HeroSection = ({
  name = "John Doe",
  title = "Full Stack Developer",
  summary = "Passionate about creating beautiful and functional web applications with modern technologies. Experienced in building scalable solutions and delivering exceptional user experiences.",
  onCallToAction = () => {},
}: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="min-h-[600px] w-full bg-background flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm {name}
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
          {title}
        </h2>

        {/* Summary */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {summary}
        </p>

        {/* Call to Action */}
        <div className="pt-4">
          <Button size="lg" onClick={onCallToAction} className="group">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
