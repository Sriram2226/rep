export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
            alt="Alex Chen - Professional headshot"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-lg object-cover"
          />
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Hi, I'm <span className="gradient-text">Alex Chen</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto">
            Computer Science Student passionate about building innovative software solutions
          </p>
          
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            Specializing in full-stack development, machine learning, and creating user-centric applications that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="mt-16 bounce-slow">
          <i className="fas fa-chevron-down text-slate-400 text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
