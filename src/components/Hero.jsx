export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-6 text-center text-lg-start hero-content">
            <h1>Jay Arun Suryavanshi</h1>
            <p className="lead mb-3">Front-End Developer</p>
            <p className="text-muted mb-4">Aspiring Front-End Developer skilled in building responsive web applications using modern JavaScript frameworks. Seeking an opportunity to apply my skills in a collaborative environment and contribute to meaningful projects.</p>
            <div className="d-flex gap-2 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn btn-gradient btn-lg">
                <i className="fas fa-rocket me-2"></i>View Projects
              </a>
              <a href="#contact" className="btn btn-outline-dark btn-lg">
                <i className="fas fa-paper-plane me-2"></i>Contact
              </a>
              <a href="/jay-suryavanshi-resume.pdf" download className="btn btn-gradient btn-lg">
                <i className="fas fa-file-download me-2"></i>Resume
              </a>
            </div>
            <div className="contact-info mt-4">
              <p><i className="fas fa-envelope"></i> suryavanshijay65@gmail.com</p>
              <p><i className="fas fa-phone"></i> +91-8830983392</p>
            </div>
          </div>
          <div className="col-lg-6 text-center profile-image-container">
            <div className="profile-image-wrapper">
              <img src="/img/hero.png" alt="Profile Image" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
