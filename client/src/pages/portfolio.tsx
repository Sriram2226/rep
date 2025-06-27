import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/components/theme-provider";

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-code",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Vue.js", "Sass"],
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      skills: ["Python", "Node.js", "Java", "MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      title: "Tools",
      icon: "fas fa-tools",
      skills: ["Git", "Docker", "AWS", "Linux", "TensorFlow", "Pandas"],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "ML Analytics Tool",
      description: "Machine learning project for predictive analytics using Python and TensorFlow.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      tags: ["Python", "TensorFlow", "Flask"],
    },
    {
      title: "Task Management App",
      description: "Mobile-first task management with real-time collaboration features.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      tags: ["React Native", "Firebase"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-primary">AC</span>
            
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
              
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
              
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
          
          {isMobileMenuOpen && (
            <div className="md:hidden border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={toggleTheme}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary"
                >
                  <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} mr-2`}></i>
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-background shadow-lg object-cover"
          />
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Alex Chen</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Computer Science Student passionate about building innovative software solutions
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Specializing in full-stack development, machine learning, and creating user-centric applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection("projects")} size="lg">
              View My Work
            </Button>
            <Button variant="outline" onClick={() => scrollToSection("contact")} size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Background & Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science student at Stanford University, currently in my junior year. 
                My journey in technology began in high school when I built my first web application.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I love tackling complex problems and turning ideas into reality through code. When I'm not 
                studying, you can find me contributing to open source projects or exploring AI and machine learning.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-graduation-cap text-primary mr-3"></i>
                  <span className="font-medium">B.S. Computer Science - Stanford University (2025)</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                  <span>San Francisco Bay Area, CA</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-trophy text-primary mr-3"></i>
                  <span>Dean's List (Fall 2023, Spring 2024)</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Workspace"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
                <div className="bg-muted p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3.8</div>
                  <div className="text-muted-foreground">GPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <i className={`${category.icon} text-4xl text-primary mb-4`}></i>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recent projects that showcase my skills and experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a href="#" className="text-primary hover:underline font-medium">
                      <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground font-medium">
                      <i className="fab fa-github mr-1"></i>GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you're looking for a developer, want to collaborate, or just say hello, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-xl text-primary-foreground"></i>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:alex.chen@email.com" className="text-primary hover:underline">
                      alex.chen@email.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-xl text-primary-foreground"></i>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco Bay Area, CA</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {["fab fa-linkedin", "fab fa-github", "fab fa-twitter"].map((icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                    >
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  <i className="fas fa-paper-plane mr-2"></i>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">&copy; 2024 Alex Chen. All rights reserved.</p>
          <p className="mt-2 text-sm text-muted-foreground">Built with React, Tailwind CSS, and lots of ☕</p>
        </div>
      </footer>
    </div>
  );
}
