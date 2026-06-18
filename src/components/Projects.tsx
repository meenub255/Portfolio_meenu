import { ExternalLink, Github, Star, GitFork } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Based Content Moderator",
      description: "An intelligent system that automatically moderates content using advanced machine learning algorithms. Built with Python and Jupyter Notebook for comprehensive analysis.",
      tech: ["Python", "Jupyter Notebook", "Machine Learning", "NLP"],
      github: "https://github.com/meenub255/AI-based-content-moderator",
      stars: 1,
      featured: true
    },
    {
      title: "Medicinal Plants Identification",
      description: "Identification of medicinal plants and raw materials through image processing using machine learning. A comprehensive solution for botanical analysis.",
      tech: ["Python", "OpenCV", "TensorFlow", "Image Processing"],
      github: "https://github.com/meenub255/Identification-of-Medicinal-Plants-Raw-materials-through-Image-Processing-Using-Machine-Learning",
      featured: true
    },
    {
      title: "Custom Linear Regression Library",
      description: "A robust, pure NumPy-based linear regression library implementing all major regression features from scratch including L1/L2 regularization, feature selection, KNN regression, and advanced diagnostics.",
      tech: ["Python", "NumPy", "SciPy", "Machine Learning"],
      github: "https://github.com/meenub255/CUSTOM-LINEAR-REGRESSION",
      featured: true
    },
    {
      title: "Quantum Ansätze for Mitigating Mode Collapse",
      description: "Hybrid Quantum-Classical GAN for medical data generation using PennyLane and PyTorch. Achieves quantum advantage with lower Wasserstein distance over classical baselines.",
      tech: ["Python", "PennyLane", "PyTorch", "Quantum Computing", "GAN"],
      github: "https://github.com/meenub255/Quantum-Ans-tze-for-Mitigating-Mode-Collapse-in-Medical-Data-Generation",
      featured: true
    },
    {
      title: "Self-Healing RAG System",
      description: "A production-grade Retrieval-Augmented Generation system with auto-correction, HyDE retrieval, query decomposition, cross-encoder reranking, and web search fallback.",
      tech: ["Python", "LangChain", "LlamaIndex", "OpenAI", "Flask"],
      github: "https://github.com/meenub255/Next_Generation_RAG",
      featured: true
    },
    {
      title: "Neuro-Fuzzy Autonomous Navigation",
      description: "Real-time autonomous navigation system using Interval Type-2 Neuro-Fuzzy Logic with YOLOv8 for monocular vision-only lane detection and obstacle avoidance.",
      tech: ["Python", "YOLOv8", "Fuzzy Logic", "Flask", "Computer Vision"],
      github: "https://github.com/meenub255/Neuro_Fuzzy_Autonomous_System",
      featured: true
    },
    {
      title: "Process-Aware Hallucination Attribution",
      description: "Research framework for mitigating LLM hallucinations in RAG systems using Integrated Gradients and surgical activation steering for token-level attribution.",
      tech: ["Python", "PyTorch", "Transformers", "LLM", "Interpretability"],
      github: "https://github.com/meenub255/Process-Aware-Hallucination-Attribution",
      featured: true
    },
    {
      title: "Snake AI with Deep Q-Learning",
      description: "An AI agent that learns to play the classic Snake game using Deep Q-Learning. Demonstrates reinforcement learning principles in a fun, visual way.",
      tech: ["Python", "PyTorch", "Deep Learning", "Reinforcement Learning"],
      github: "https://github.com/meenub255/snake-ga",
      forked: true
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wider mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work in Machine Learning, AI, Data Science, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-6 rounded-2xl bg-[image:var(--gradient-card)] border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-glow-sm hover:-translate-y-1"
            >
              {project.featured && (
                <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-[image:var(--gradient-primary)] text-xs font-medium text-primary-foreground">
                  Featured
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  {project.stars && (
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </span>
                  )}
                  {project.forked && (
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <GitFork className="w-4 h-4" />
                      Fork
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/meenub255?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 text-foreground font-medium transition-all duration-300 hover:border-primary hover:bg-primary/10"
          >
            <Github className="w-5 h-5" />
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
