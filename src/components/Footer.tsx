import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold gradient-text mb-2">Shubham Singh</p>
            <p className="text-gray-400">Software Engineer</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#experience" onClick={(e) => handleScroll(e, "experience")} className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#education" onClick={(e) => handleScroll(e, "education")} className="text-gray-300 hover:text-white transition-colors">Education</a>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

          <div className="mt-6 md:mt-0 flex gap-4">
            <a
              href="https://github.com/shubhamcr10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/shubhamcr10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="mailto:shubhamcr10@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Shubham Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
