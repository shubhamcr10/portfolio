
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className={`w-full md:w-2/3 space-y-6 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <p className="text-blue-600 font-semibold">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Shubham Singh
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700">
              Software Engineer specializing in <span className="text-blue-600">C++</span> and <span className="text-blue-600">Embedded Systems</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              I develop cutting-edge technology solutions for complex problems. Currently working at TSYS in Global Payments, focusing on secure payment processing solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </div>
          </div>
          
          <div className={`w-full md:w-1/3 flex justify-center transition-all duration-700 delay-300 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600">
              <img 
                src="/profile.jpg"
                alt="Shubham Singh" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-blue-600">
          <ChevronDown size={32} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
