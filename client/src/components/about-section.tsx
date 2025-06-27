export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Background & Education</h3>
            <p className="text-slate-600 leading-relaxed">
              I'm a passionate Computer Science student at Stanford University, currently in my junior year. 
              My journey in technology began in high school when I built my first web application, and I've 
              been hooked on coding ever since.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I love tackling complex problems and turning ideas into reality through code. When I'm not 
              studying or working on projects, you can find me contributing to open source projects, 
              participating in hackathons, or exploring the latest in AI and machine learning.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-graduation-cap text-blue-600 mr-3"></i>
                <span className="font-medium">B.S. Computer Science - Stanford University (2025)</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-blue-600 mr-3"></i>
                <span>San Francisco Bay Area, CA</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-trophy text-blue-600 mr-3"></i>
                <span>Dean's List (Fall 2023, Spring 2024)</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Modern coding workspace setup"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3.8</div>
                <div className="text-slate-600">GPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
