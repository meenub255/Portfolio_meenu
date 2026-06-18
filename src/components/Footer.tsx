import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Meenu. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/meenub255"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
