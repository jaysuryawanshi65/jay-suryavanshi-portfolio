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
        <div className="row justify-content-center">
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
