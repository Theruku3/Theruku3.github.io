import Navigation from "./portfolio/Navigation";
import HeroSection from "./portfolio/HeroSection";
import ProjectsGrid from "./portfolio/ProjectsGrid";
import AboutSection from "./portfolio/AboutSection";
import ContactSection from "./portfolio/ContactSection";

function Home() {
  const handleNavigate = (section: string) => {
    // Navigation callback if needed
  };

  const handleProjectClick = (index: number) => {
    // Project click handler if needed
  };

  const handleContactSubmit = (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    // Contact form submission handler if needed
  };

  const handleResumeClick = () => {
    // Resume download handler if needed
  };

  return (
    <div className="w-full min-h-screen bg-background">
      <Navigation onNavigate={handleNavigate} />

      {/* Add top padding to account for fixed navigation */}
      <main className="pt-16">
        <HeroSection
          name="John Doe"
          title="Full Stack Developer"
          summary="Passionate about creating beautiful and functional web applications with modern technologies. Experienced in building scalable solutions and delivering exceptional user experiences."
          onCallToAction={() => handleNavigate("projects")}
        />

        <AboutSection
          title="About Me"
          subtitle="Passionate Developer & Problem Solver"
          onResumeClick={handleResumeClick}
        />

        <ProjectsGrid onProjectClick={handleProjectClick} />

        <ContactSection
          email="contact@example.com"
          phone="+1 (555) 123-4567"
          location="San Francisco, CA"
          onSubmit={handleContactSubmit}
        />
      </main>
    </div>
  );
}

export default Home;
