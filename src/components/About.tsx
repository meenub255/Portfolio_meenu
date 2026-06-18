import { Code2, Brain, Sparkles } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  const highlights = [
    {
      icon: Brain,
      title: "AI Engineering",
      description: "Designing and deploying production-grade AI systems with deep learning, NLP, and computer vision"
    },
    {
      icon: Code2,
      title: "Research & Innovation",
      description: "Pushing boundaries in quantum ML, neuro-fuzzy systems, and LLM interpretability"
    },
    {
      icon: Sparkles,
      title: "Applied AI Solutions",
      description: "Bridging research and real-world impact through RAG systems, GANs, and autonomous systems"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 animate-on-scroll ${sectionVisible ? 'animate-visible' : ''}`}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wider mb-4">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
              AI Engineer & Researcher
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm an AI Engineer and Researcher passionate about developing intelligent systems 
            that push the boundaries of what's possible. My work spans from building production-grade 
            ML pipelines to conducting research in quantum computing, neuro-fuzzy systems, and 
            LLM interpretability. I thrive at the intersection of innovation and real-world impact.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-[image:var(--gradient-card)] border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-glow-sm tilt-card animate-on-scroll ${cardsVisible ? 'animate-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[image:var(--gradient-primary)] flex items-center justify-center mb-6 group-hover:shadow-glow-sm transition-shadow duration-500 group-hover:scale-110">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
