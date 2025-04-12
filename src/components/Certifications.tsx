
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Deep Learning",
    organization: "NPTEL",
    date: "Issued Oct 2021",
    credentialId: "NPTEL21CS76123390455",
    image: "https://play-lh.googleusercontent.com/mJsEybzMk8ChgxD_JCYbL-9IH4BpJrtgk2XFTFlVE5IO-dOxkuQnuNzS5BN9FYHlvQ"
  },
  {
    id: 2,
    title: "Google Analytics Individual Qualification",
    organization: "Google",
    date: "Issued Oct 2021 - Expired Oct 2022",
    credentialId: "34927342",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
  },
  {
    id: 3,
    title: "Accenture Nordic Developer Program",
    organization: "Accenture",
    date: "Issued Sep 2021",
    credentialId: "EQ5I9Plh2bp/8iby",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png"
  },
  {
    id: 4,
    title: "Foundations: Data, Data, Everywhere",
    organization: "Google",
    date: "Issued Sep 2021",
    credentialId: "Q3FDBGC9K8X2",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
  },
  {
    id: 5,
    title: "Goldman Sachs Engineering Virtual Program",
    organization: "Goldman Sachs",
    date: "Issued Sep 2021",
    credentialId: "BbahFSgm6WX56GMj",
    image: "https://logos-world.net/wp-content/uploads/2021/02/Goldman-Sachs-Logo.png"
  },
  {
    id: 6,
    title: "DevNet Associate",
    organization: "Cisco",
    date: "Issued Aug 2021",
    credentialId: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png"
  }
];

const CertificationCard = ({ certification, isVisible }) => {
  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 flex transition-all duration-700 card-hover ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-16 bg-gray-50 flex items-center justify-center p-2 border-r border-gray-100">
        <img 
          src={certification.image}
          alt={certification.organization}
          className="w-10 h-10 object-contain"
        />
      </div>
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-900">{certification.title}</h3>
            <p className="text-blue-600 text-sm">{certification.organization}</p>
          </div>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Calendar className="h-3 w-3 mr-1" /> {certification.date}
          </Badge>
        </div>
        
        {certification.credentialId && (
          <p className="text-gray-500 text-xs mt-2">
            Credential ID: {certification.credentialId}
          </p>
        )}
        
        <div className="mt-3">
          <Button size="sm" variant="outline" className="text-xs">
            <Award className="h-3 w-3 mr-1" /> Show credential
          </Button>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
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
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">
          Licenses & <span className="gradient-text">Certifications</span>
        </h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
