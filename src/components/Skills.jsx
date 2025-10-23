export default function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 section-title">Skills</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="skill-category mb-0">
              <h4>Frontend</h4>
              <div className="skills-pills">
                <span className="pill">HTML5</span>
                <span className="pill">CSS3</span>
                <span className="pill">JavaScript (ES6+)</span>
                <span className="pill">React.js</span>
                <span className="pill">Bootstrap</span>
                <span className="pill">Tailwind CSS</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill-category mb-0">
              <h4>Backend</h4>
              <div className="skills-pills">
                <span className="pill">Node.js</span>
                <span className="pill">Express.js</span>
                <span className="pill">MongoDB</span>
                <span className="pill">REST APIs</span>
                <span className="pill">Stripe API (in progress)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill-category mb-0">
              <h4>Tools & Others</h4>
              <div className="skills-pills">
                <span className="pill">Git</span>
                <span className="pill">GitHub</span>
                <span className="pill">VS Code</span>
                <span className="pill">Postman</span>
                <span className="pill">npm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
