export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application built with React, Node.js, and MongoDB. Features user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      tags: ["React", "Node.js", "MongoDB"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "ML Data Analytics Tool",
      description: "Machine learning project for predictive analytics using Python, TensorFlow, and Flask. Includes data visualization and model deployment.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      tags: ["Python", "TensorFlow", "Flask"],
      tagColors: ["bg-yellow-100 text-yellow-800", "bg-orange-100 text-orange-800", "bg-red-100 text-red-800"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description: "Mobile-first task management application with real-time collaboration features. Built with React Native and Firebase backend.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      tags: ["React Native", "Firebase", "TypeScript"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-indigo-100 text-indigo-800"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot using natural language processing to provide customer support. Integrated with OpenAI API and built with Vue.js.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      tags: ["Vue.js", "OpenAI API", "WebSockets"],
      tagColors: ["bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-cyan-100 text-cyan-800"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracking application with price alerts and market analysis. Built with React and integrated with CoinGecko API.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      tags: ["React", "Chart.js", "REST API"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-green-100 text-green-800"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform that tracks engagement metrics across multiple platforms. Built with Django and PostgreSQL.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      tags: ["Django", "PostgreSQL", "Redis"],
      tagColors: ["bg-green-100 text-green-800", "bg-blue-100 text-blue-800", "bg-red-100 text-red-800"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-sm rounded-full ${project.tagColors[tagIndex]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-slate-600 hover:text-slate-800 font-medium"
                  >
                    <i className="fab fa-github mr-1"></i>GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
