
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, GraduationCap } from "lucide-react";

const Education = () => {
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
    <section id="education" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">
          <span className="gradient-text">Education</span>
        </h2>
        
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto mt-12 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
            <div className="p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-blue-50 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Galgotias University</h3>
                    <p className="text-blue-600">Bachelor of Technology - BTech, Computer Science</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center text-gray-500">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>2018 - 2022</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-gray-700">Grade</div>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">7.23</Badge>
                </div>
                <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: "72.3%" }}></div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Key Courses</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Data Structures</Badge>
                  <Badge variant="outline">Algorithms</Badge>
                  <Badge variant="outline">Computer Networks</Badge>
                  <Badge variant="outline">Operating Systems</Badge>
                  <Badge variant="outline">Database Management</Badge>
                  <Badge variant="outline">Object Oriented Programming</Badge>
                  <Badge variant="outline">Software Engineering</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
