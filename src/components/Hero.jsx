export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 hero-content">
            <span className="hero-eyebrow">PGCP-AC (CDAC) Graduate</span>
            <h1>Building <span>real-world</span> software.</h1>
            <p className="lead mb-3">Software Developer · Java · .NET · Full Stack</p>
            <p className="hero-description mb-4">
              I build database-driven applications and REST APIs with Java, Spring Boot, ASP.NET Core and React.js, with a focus on clean code, problem-solving and practical software development.
            </p>
            <div className="d-flex gap-2 hero-actions">
              <a href="#projects" className="btn btn-gradient"><i className="fas fa-arrow-right me-2"></i>Explore Projects</a>
              <a href="#contact" className="btn btn-ghost">Let's Connect</a>
              <a href="/jay-suryavanshi-resume.pdf" download className="btn btn-ghost"><i className="fas fa-download me-2"></i>Resume</a>
            </div>
            <div className="contact-info mt-4">
              <p><i className="fas fa-envelope"></i>suryavanshijay65@gmail.com</p>
              <p><i className="fas fa-location-dot"></i>Sangli, Maharashtra</p>
            </div>
          </div>
          <div className="col-lg-5 profile-image-container">
            <div className="profile-image-wrapper">
              <img src="/img/hero.png" alt="Jay Arun Suryavanshi" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
