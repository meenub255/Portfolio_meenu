import { BookOpen } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Publications = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  const publications = [
    {
      title: "AI Based Content Moderator for Devanagari Scripts",
      venue: "6th IEEE Conference on Control, Communication and Computing",
      location: "Thiruvananthapuram, India",
      date: "May 2025",
      type: "Conference"
    },
    {
      title: "Identification of Different Medicinal Plants/Raw Materials through Image Processing Using Machine Learning Algorithms",
      venue: "Iconic Research and Engineering Journals",
      location: "vol.8 Issue no.11, pp.888-893",
      date: "May 2025",
      type: "Journal"
    },
    {
      title: "A Cyber Defensive Model for Diabetic Retinopathy Using Bit-Plane Methods",
      venue: "6th IEEE Conference on Control, Communication and Computing",
      location: "Thiruvananthapuram, India",
      date: "May 2025",
      type: "Conference"
    },
    {
      title: "Evaluating Recommendations Algorithms: A Case Study on Online News Platforms",
      venue: "Next-Generation Recommendation System: Illustrating Enabling Technologies and Tools",
      location: "Chapter 15, Wiley Publications",
      date: "2025",
      type: "Book Chapter"
    }
  ];

  return (
    <section id="publications" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 animate-on-scroll ${sectionVisible ? 'animate-visible' : ''}`}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wider mb-4 animate-pulse-scale">
            PUBLICATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent animate-gradient-text">
              Research & Publications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Published research in IEEE conferences, Wiley publications, and peer-reviewed journals
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 animate-expand-line" />
        </div>

        <div 
          ref={cardsRef}
          className="space-y-4"
        >
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-[image:var(--gradient-card)] border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-glow-sm hover:-translate-y-1 card-hover animate-on-scroll ${cardsVisible ? 'animate-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {pub.venue}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-muted-foreground">{pub.location}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-primary font-medium">{pub.date}</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors cursor-default">
                      {pub.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
