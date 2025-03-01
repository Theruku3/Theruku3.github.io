import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  skills?: string[];
  experience?: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  onResumeClick?: () => void;
}

const AboutSection = ({
  title = "About Me",
  subtitle = "Passionate Developer & Problem Solver",
  description = "I'm a full-stack developer with a strong focus on creating intuitive and performant web applications. With several years of experience in the industry, I've developed a deep understanding of modern web technologies and best practices.",
  skills = [
    "JavaScript/TypeScript",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "GraphQL",
    "MongoDB",
  ],
  experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description:
        "Lead development of enterprise web applications using modern technologies.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Co.",
      period: "2018 - 2020",
      description:
        "Developed and maintained multiple client-facing applications.",
    },
  ],
  onResumeClick = () => {},
}: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="w-full min-h-[600px] bg-background py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - About Me */}
          <div className="space-y-6">
            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
                <Button
                  onClick={onResumeClick}
                  className="mt-6 group"
                  variant="secondary"
                >
                  Download Resume
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Experience */}
          <div>
            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-6">Experience</h3>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-border pl-4">
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        {exp.period}
                      </p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
