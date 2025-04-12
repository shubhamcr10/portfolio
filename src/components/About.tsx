
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
              First and foremost, I love writing code. Ever since writing my first program in C++ and manipulating it to produce a desired output, I have been obsessed with the idea of using software to solve practical problems. Software engineering is a never-ending puzzle that I am passionately engaged in solving.
            </p>
            <p>
              Ever since I was a little kid, software engineering has been my passion. As I went through the BASIC tutorial, it was almost magic, being able to get the computer to do whatever I wanted, just by typing in, limited only by my own imagination and ingenuity. I learned C++, tearing through YouTube videos I could find on anything remotely related to Coding. I was insatiable.
            </p>
            <p>
              This passion carried me through my education. Here there were more resources available to me than I ever could have imagined as a kid. I studied new languages, algorithms, compilers, all with pretty much the same fascination that drove me as a kid. And it was here that I learned truly how much there was yet to learn.
            </p>
            <p>
              So, now, in industry, this passion remains with me. There's certainly yet more to learn, yet more problems to solve, and yet more to build. And for this, I am very grateful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
