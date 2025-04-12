
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Hi, I’m Shubham — a software engineer who thrives on building robust, scalable, and impactful systems that power real-world functionality. From low-level optimization to full-scale architecture, I enjoy working at the intersection of performance, precision, and purpose.
            </p>
            <p>
              With experience spanning fintech and embedded systems, I’ve contributed to everything from real-time payment infrastructure at TSYS (Global Payments) to precision positioning systems and automotive automation at Jangoo Technologies. My toolkit includes C++, C, Pro*C, SQL, and other tools that help me push the limits of software to solve complex problems efficiently.
            </p>
            <p>
              I have a strong grounding in system design, secure development practices, and agile collaboration — whether it’s deploying payment features for Mastercard and RuPay, or creating a dynamic profiling tool from scratch using Qt and C++. I’m also a curious learner, constantly evolving with industry shifts and exploring new tools that improve my craft.
            </p>
            <p>
              When I’m not coding, I’m usually exploring tech communities, contributing to personal projects, or experimenting with new ideas I believe can make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
