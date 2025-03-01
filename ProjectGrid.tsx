import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

interface ProjectsGridProps {
  projects?: Project[];
  onProjectClick?: (index: number) => void;
}

const ProjectsGrid = ({
  projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online shopping platform with cart management, user authentication, and payment processing.",
      imageUrl: "https://dummyimage.com/384x216/cbd5e1/1e293b&text=E-commerce",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team workspace features.",
      imageUrl:
        "https://dummyimage.com/384x216/cbd5e1/1e293b&text=Task+Manager",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
    },
    {
      title: "Social Media Dashboard",
      description:
        "An analytics dashboard for social media management with data visualization and reporting tools.",
      imageUrl: "https://dummyimage.com/384x216/cbd5e1/1e293b&text=Dashboard",
      technologies: ["TypeScript", "D3.js", "Express"],
    },
  ],
  onProjectClick = () => {},
}: ProjectsGridProps) => {
  return (
    <section
      id="projects"
      className="w-full min-h-[800px] bg-background py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              onLearnMore={() => onProjectClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
