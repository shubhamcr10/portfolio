
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";
import CombatDisplayGif from "@/assets/Combat-Display-System.gif";
import DynamicProfilingGif from "@/assets/Dynamic-Profiling.gif";
import SimulatorsGif from "@/assets/Simulators.gif";
import TrailerHitchAssistGif from "@/assets/Trailer-Hitch-Assist.gif";

const projects = [
  {
    id: 1,
    title: "PRIME® – Payment Processing Platform (TSYS)",
    date: "May 2024 – Present",
    description: "Contributing to TSYS’s PRIME® platform, a scalable global payment processing solution. Implemented MoneySend for MasterCard and developed Manage Usage for UPI transactions on RuPay cards. Participated in architecture discussions and collaborated in agile teams to deliver secure, high-performance payment features.",
    skills: ["C++", "Pro*C", "SQL", "Shell Scripting", "Linux", "Payment Systems", "System Design", "Digital Payments", "MasterCard", "RuPay"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyVza2egjTPwj73EMgGTyVtmjHmeXlFB2OQ4cfqMCwhRJqmdt7R1hxAAanXhyPgbhbG4&usqp=CAU"
  },
  {
    id: 2,
    title: "Combat Display System",
    date: "Jan 2024 - July 2024",
    description: "The Combat Display System is a project designed as a clone of a navy display system. It provides a graphical interface for visualizing the movements of tracks captured by radar and sonar sensors, with data sent by simulators.",
    skills: ["C++", "Qt Signal Handling", "Qt QMake", "C (Programming Language)"],
    github: "https://github.com/shubhamcr10/Combat-Display-System",
    image: CombatDisplayGif,
  },
  {
    id: 3,
    title: "Dynamic Profiling Application",
    date: "Jan 2023 - Jan 2024",
    description: "Solely designed and developed a Dynamic Profiling application in Qt using C++. Employed Qt Signal Handling for dynamic profiling control from external sources.",
    skills: ["Qt", "Qt Creator", "C++", "Object Oriented", "Qt Signal Handling", "Clang", "Unix", "Microsoft Visual Studio Code"],
    github: "https://github.com/shubhamcr10/DynamicProfiling",
    image: DynamicProfilingGif,
  },
  {
    id: 4,
    title: "Trailer Hitch Assist",
    date: "Jan 2023 - Jan 2024",
    description: "Developing an Advanced Driver Assistance System (ADAS) that identifies the hitchball and enables automatic vehicle connection, showcasing expertise in computer vision and sensor technology.",
    skills: ["C++", "C (Programming Language)", "Computer Vision", "Embedded Board", "Raspberry PI", "STM32", "Motor Control", "Jetson", "Qt", "Linux", "Microsoft Visual Studio Code", "Qt QMake", "cmake"],
    image: TrailerHitchAssistGif,
  },
  {
    id: 5,
    title: "Course & Track Simulators",
    date: "Jan 2024 – Jan 2024",
    description: "Developed simulators for a naval-like combat display system using Micro XRCE-DDS. The Course Simulator published simulated course, speed, and depth data, while the Track Simulator emulated track behavior and integrated with the Combat Display System for real-time visualization.",
    skills: ["C++", "C (Programming Language)", "DDS", "QMake"],
    github: "https://github.com/shubhamcr10",
    image: SimulatorsGif,
  }
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
