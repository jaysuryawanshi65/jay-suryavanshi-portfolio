const skillGroups = [
  ['Languages','fas fa-code',['Java','C++','C#','JavaScript']],
  ['Backend & APIs','fas fa-server',['Spring Boot','ASP.NET Core','Node.js','Express.js','REST APIs']],
  ['Frontend','fas fa-laptop-code',['HTML5','CSS3','JavaScript (ES6+)','React.js','Bootstrap','Tailwind CSS']],
  ['Database','fas fa-database',['MySQL','SQL','MongoDB']],
  ['Core Concepts','fas fa-brain',['OOP','Data Structures & Algorithms']],
  ['Tools','fas fa-toolbox',['Git','GitHub','Docker','Postman','VS Code','npm']]
]

export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="row g-3">
          {skillGroups.map(([title, icon, skills]) => (
            <div className="col-md-6 col-lg-4" key={title}>
              <div className="skill-category">
                <h4><i className={`${icon} me-2`}></i>{title}</h4>
                <div className="skills-pills">{skills.map(skill => <span className="pill" key={skill}>{skill}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
