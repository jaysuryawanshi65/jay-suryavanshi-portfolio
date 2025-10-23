export default function Experience() {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 section-title">Work Experience</h2>
        <div className="timeline">
          <div className="experience-item mb-4">
            <h4 className="mb-1">Front-End Developer Intern</h4>
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <span className="company">Web Mantra IT Solutions, Sangli</span>
              <span className="duration"><i className="far fa-calendar-alt me-1"></i>Jan 2024 - Sep 2024</span>
            </div>
            <ul className="mb-0">
              <li>Developed responsive UI components using HTML, CSS, and Bootstrap</li>
              <li>Collaborated with senior developers to implement interactive features</li>
              <li>Optimized existing pages for improved performance and accessibility</li>
            </ul>
          </div>
          <div className="experience-item mb-4">
            <h4 className="mb-1">Front-End Developer Intern</h4>
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <span className="company">Techno IT Solutions, Miraj</span>
              <span className="duration"><i className="far fa-calendar-alt me-1"></i>Aug 2023 - Oct 2023</span>
            </div>
            <ul className="mb-0">
              <li>Developed responsive UI components using HTML, CSS, and Bootstrap</li>
              <li>Worked in Live Project as an Admin named Green Phoenix</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
