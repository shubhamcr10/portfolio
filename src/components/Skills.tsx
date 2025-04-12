
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { 
  Code, Database, Server, Activity, Shield, Terminal, 
  Cpu, Gauge, Globe, GitBranch, FileCode
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    id: 1,
    name: "Programming Languages",
    icon: <Code />,
    skills: [
      { name: "C++", level: 95 },
      { name: "C", level: 90 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    id: 2,
    name: "Frameworks & Libraries",
    icon: <FileCode />,
    skills: [
      { name: "Qt", level: 90 },
      { name: "STL", level: 85 },
      { name: "React", level: 70 },
      { name: "PyTorch", level: 65 }
    ]
  },
  {
    id: 3,
    name: "Tools & Technologies",
    icon: <Terminal />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CMake", level: 80 },
      { name: "QMake", level: 85 },
      { name: "Visual Studio Code", level: 90 }
    ]
  },
  {
    id: 4,
    name: "Operating Systems",
    icon: <Server />,
    skills: [
      { name: "Linux", level: 85 },
      { name: "Windows", level: 80 },
      { name: "Unix", level: 75 }
    ]
  },
  {
    id: 5,
    name: "Embedded Systems",
    icon: <Cpu />,
    skills: [
      { name: "Raspberry Pi", level: 85 },
      { name: "STM32", level: 80 },
      { name: "Embedded Board", level: 75 },
      { name: "Jetson", level: 70 }
    ]
  },
  {
    id: 6,
    name: "Other Skills",
    icon: <Globe />,
    skills: [
      { name: "CI/CD", level: 80 },
      { name: "Computer Vision", level: 75 },
      { name: "GNSS", level: 85 },
      { name: "Agile Development", level: 80 },
      { name: "Shell Scripting", level: 70 }
    ]
  }
];

const SkillCategory = ({ category, isVisible, delay }) => {
  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-1000 delay-${delay} ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            {category.icon}
          </div>
          <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
        </div>
        
        <div className="space-y-4">
          {category.skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
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
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.id}
              category={category}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
