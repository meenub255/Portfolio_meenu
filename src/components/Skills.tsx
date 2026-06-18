import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "ML & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Deep Learning"]
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "HTML/CSS", "REST APIs"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Jupyter", "Docker", "AWS"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 animate-on-scroll ${sectionVisible ? 'animate-visible' : ''}`}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wider mb-4">
            EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
        </div>

        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-glow-sm hover:-translate-y-2 animate-on-scroll ${cardsVisible ? 'animate-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2 fade-in-up-stagger">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
