export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 section-title">Contact Me</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-5">
            <div className="contact-info-card h-100">
              <h4>Let's connect</h4>
              <p className="text-muted">I am open to opportunities in Software Development, Java, .NET, and Full Stack Development.</p>
              <a href="mailto:suryavanshijay65@gmail.com" className="contact-link">
                <i className="fas fa-envelope"></i>
                <span>suryavanshijay65@gmail.com</span>
              </a>
              <a href="tel:+918830893392" className="contact-link">
                <i className="fas fa-phone"></i>
                <span>+91 8830893392</span>
              </a>
              <a href="https://linkedin.com/in/jay-suryavanshi-6b2217201" target="_blank" rel="noreferrer" className="contact-link">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/jaysuryawanshi65" target="_blank" rel="noreferrer" className="contact-link">
                <i className="fab fa-github"></i>
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          <div className="col-lg-7">
            <form id="contactForm" onSubmit={onSubmit} className="contact-card">
              <div className="mb-3">
                <label className="form-label"><i className="fas fa-user me-2"></i>Name</label>
                <input type="text" className="form-control" placeholder="Your full name" required />
              </div>
              <div className="mb-3">
                <label className="form-label"><i className="fas fa-envelope me-2"></i>Email</label>
                <input type="email" className="form-control" placeholder="you@example.com" required />
              </div>
              <div className="mb-3">
                <label className="form-label"><i className="fas fa-message me-2"></i>Message</label>
                <textarea className="form-control" rows="5" placeholder="How can I help you?" required></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-gradient">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
