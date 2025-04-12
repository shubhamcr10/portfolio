
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TSYS | Global Payments",
    location: "Noida, Uttar Pradesh, India",
    type: "Full-time",
    date: "May 2024 - Present",
    description: [
      "As a Software Engineer at TSYS India, part of Global Payments, I contribute to the development and optimization of secure and scalable payment processing solutions.",
      "My work involves integrating innovative functionalities, such as MoneySend for MasterCard and UPI transactions for RuPay cards, to enhance digital payment systems.",
    ],
    highlights: [
      "Payment Solution Development: Developing and deploying features using C++, Pro*C, and database technologies to improve payment efficiency and expand digital payment functionality.",
      "Collaboration and Agile Practices: Working with cross-functional teams in agile development settings to ensure timely delivery of high-quality software solutions.",
      "System Design and Architecture: Participating in system design discussions to ensure the scalability, reliability, and security of payment processing systems.",
      "Security and Compliance: Implementing robust security measures and ensuring adherence to industry standards to maintain compliance and data integrity.",
      "Continuous Improvement: Staying at the forefront of industry advancements and contributing to the evolution of systems to meet emerging market needs."
    ]
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Jangoo Technology",
    location: "Gurugram, Haryana, India",
    type: "Full-time",
    date: "Sep 2022 - Apr 2024",
    description: [
      "As a Software Engineer at Jangoo Technologies Pvt Ltd, I was involved in developing cutting-edge technology solutions."
    ],
    highlights: [
      "Collaborating with Swift Navigation on the Starling Core project, a GNSS-based precise positioning ecosystem for autonomous applications, contributing to cutting-edge technology solutions.",
      "Developing an Advanced Driver Assistance System (ADAS) that detects the hitchball and enables automatic connection.",
      "Independently developed a Dynamic Profiling application in Qt using C++, which utilizes Qt Signal Handling for controlling the profiling dynamically from external sources.",
      "Collaborated with cross-functional teams to optimize software development, introducing best practices like code reviews and standards."
    ],
    skills: ["Continuous Integration and Continuous Delivery (CI/CD)", "Conan"]
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "INMAS, Defence Research and Development Organization (DRDO)",
    location: "New Delhi, Delhi, India",
    type: "Internship",
    date: "Jun 2020 - Sep 2020",
    description: [
      "Integrated PyTorch-based OCR technology, enabling seamless conversion of documents into editable and searchable data."
    ],
    highlights: []
  }
];

const TimelineItem = ({ experience, isVisible }) => {
  return (
    <div 
      className={`timeline-item transition-all duration-1000 delay-${experience.id * 200} ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
          <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            {experience.type}
          </Badge>
        </div>
        
        <h4 className="text-lg font-semibold text-blue-600 mb-2">
          {experience.company}
        </h4>
        
        <div className="flex items-center text-gray-500 mb-2 gap-4">
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1" />
            <span className="text-sm">{experience.date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{experience.location}</span>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          {experience.description.map((desc, idx) => (
            <p key={idx} className="text-gray-700">{desc}</p>
          ))}
          
          {experience.highlights.length > 0 && (
            <div className="mt-4">
              <ul className="list-disc pl-5 space-y-1">
                {experience.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-700">{highlight}</li>
                ))}
              </ul>
            </div>
          )}
          
          {experience.skills && (
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.skills.map((skill, idx) => (
                <Badge key={idx} variant="secondary" className="bg-gray-100">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div 
          ref={ref}
          className="max-w-4xl mx-auto mt-12 timeline-container"
        >
          {experiences.map((experience) => (
            <TimelineItem 
              key={experience.id} 
              experience={experience}
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
