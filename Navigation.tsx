import { Button } from "@/components/ui/button";

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

const Navigation = ({ onNavigate = () => {} }: NavigationProps) => {
  const handleClick = (section: string) => {
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onNavigate(section);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-background border-b border-border z-50 px-4">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo/Home */}
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          onClick={() => handleClick("hero")}
        >
          <span className="font-semibold">Portfolio</span>
        </Button>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => handleClick("about")}
          >
            <span>About</span>
          </Button>

          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => handleClick("projects")}
          >
            <span>Projects</span>
          </Button>

          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => handleClick("contact")}
          >
            <span>Contact</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
