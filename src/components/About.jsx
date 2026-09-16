export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-panel">
            <p className="lead mb-3">
              I am a PGCP-AC (CDAC) graduate with a background in Computer Applications and a strong interest in software development.
            </p>
            <p className="text-muted mb-0">
              I have a solid foundation in Java, C++, C#, Data Structures & Algorithms, SQL and Object-Oriented Programming, with hands-on experience in Spring Boot, ASP.NET Core, REST APIs, React.js, MySQL, Git and Docker. I enjoy problem-solving, learning new technologies and building practical software solutions.
            </p>
          </div>
          <div className="about-panel d-flex flex-column justify-content-center">
            <div className="text-muted small mb-2">CURRENT FOCUS</div>
            <h4 className="mb-3">Software Development</h4>
            <div className="d-flex flex-wrap gap-2">
              <span className="pill">Java</span><span className="pill">.NET</span><span className="pill">Spring Boot</span><span className="pill">React</span><span className="pill">REST APIs</span><span className="pill">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
