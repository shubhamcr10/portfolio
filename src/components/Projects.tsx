
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Combat Display System",
    date: "Jan 2024 - July 2024",
    description: "The Combat Display System is a project designed as a clone of a navy display system. It provides a graphical interface for visualizing the movements of tracks captured by radar and sonar sensors, with data sent by simulators.",
    skills: ["C++", "Qt Signal Handling", "Qt QMake", "C (Programming Language)"],
    github: "https://github.com/shubhamcr10/Combat-Display-System",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "Course Simulator",
    date: "Jan 2024 - Jan 2024",
    description: "The Course Simulator is an example program that publishes simulated data related to course, speed, and depth over Mikro MKT-DDS.",
    skills: ["C++", "C (Programming Language)", "DDS", "QMake"],
    github: "https://github.com/shubhamcr10/Course-Simulator",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "Dynamic Profiling Application",
    date: "Jan 2023 - Jan 2024",
    description: "Solely designed and developed a Dynamic Profiling application in Qt using C++. Employed Qt Signal Handling for dynamic profiling control from external sources.",
    skills: ["Qt", "Qt Creator", "C++", "Object Oriented", "Qt Signal Handling", "Clang", "Unix", "Microsoft Visual Studio Code"],
    github: "https://github.com/shubhamcr10/DynamicProfiling",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 4,
    title: "Track Simulator",
    date: "Jan 2024 - Jan 2024",
    description: "The Track Simulator is a program designed to simulate the behavior of tracks in a naval-like combat display system. It works hand-in-hand with the Combat Display System application over Mikro MKT-DDS.",
    skills: ["C++", "C (Programming Language)", "DDS", "QMake"],
    github: "https://github.com/shubhamcr10/Track-Simulator",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 5,
    title: "Trailer Hitch Assist",
    date: "Jan 2023 - Jan 2024",
    description: "Developing an Advanced Driver Assistance System (ADAS) that identifies the hitchball and enables automatic vehicle connection, showcasing expertise in computer vision and sensor technology.",
    skills: ["C++", "C (Programming Language)", "Computer Vision", "Embedded Board", "Raspberry PI", "STM32", "Motor Control", "Jetson", "Qt", "Linux", "Microsoft Visual Studio Code", "Qt QMake", "cmake"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 6,
    title: "Starling Core",
    date: "Jan 2023 - Jan 2023",
    description: "Collaborated on the Starling Core project for Swift Navigation, involving edge device processing of GNSS and sensor data with Skylink corrections, providing precise location to applications.",
    skills: ["Global Navigation Satellite System (GNSS)", "C++", "C (Programming Language)", "QMake", "NetIpAC", "Docker", "Jenkins", "Linux", "Qt", "Microsoft Visual Studio Code", "Qt QML", "Continuous Integration and Continuous Delivery (CI/CD)"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
];

const ProjectCard = ({ project, isVisible }) => {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col transition-all duration-700 card-hover ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        </div>
        
        <div className="flex items-center text-gray-500 mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="text-sm">{project.date}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.slice(0, 3).map((skill, idx) => (
              <Badge key={idx} variant="secondary" className="bg-gray-100">
                {skill}
              </Badge>
            ))}
            {project.skills.length > 3 && (
              <Badge variant="outline">+{project.skills.length - 3} more</Badge>
            )}
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between">
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isVisible={isVisible} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href="https://github.com/shubhamcr10" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
