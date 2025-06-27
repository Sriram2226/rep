export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "fas fa-code",
      skills: [
        { name: "React", icon: "fab fa-react" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "Vue.js", icon: "fab fa-vue" },
        { name: "Sass", icon: "fab fa-sass" },
      ],
    },
    {
      title: "Backend Development",
      icon: "fas fa-server",
      skills: [
        { name: "Python", icon: "fab fa-python" },
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Java", icon: "fab fa-java" },
        { name: "MongoDB", icon: "fas fa-database" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "Firebase", icon: "fas fa-fire" },
      ],
    },
    {
      title: "Tools & Other",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "AWS", icon: "fab fa-aws" },
        { name: "Linux", icon: "fab fa-linux" },
        { name: "TensorFlow", icon: "fas fa-robot" },
        { name: "Pandas", icon: "fas fa-chart-line" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="text-center mb-6">
                <i className={`${category.icon} text-4xl text-blue-600 mb-4`}></i>
                <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <i className={`${skill.icon} text-3xl skill-icon mb-2`}></i>
                    <p className="text-sm text-slate-600">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
