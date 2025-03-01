import { Badge } from "@/components/ui/badge";

interface TechStackTagProps {
  technology?: string;
  variant?: "default" | "secondary" | "outline" | "destructive";
}

const TechStackTag = ({
  technology = "React",
  variant = "secondary",
}: TechStackTagProps) => {
  return (
    <Badge
      variant={variant}
      className="bg-background text-sm font-medium px-2.5 py-0.5 rounded-full"
    >
      {technology}
    </Badge>
  );
};

export default TechStackTag;
