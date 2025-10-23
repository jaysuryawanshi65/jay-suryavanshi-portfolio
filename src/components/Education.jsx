export default function Education() {
  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 section-title">Education</h2>
        <div className="timeline">
          <div className="experience-item mb-4">
            <h4 className="mb-1">Master of Computer Applications (MCA)</h4>
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <span className="company"><i className="fas fa-university me-2"></i>VP Institute of Management & Development Research, Sangli</span>
              <span className="duration text-nowrap"><i className="far fa-calendar-alt me-1"></i>2022 – 2024</span>
            </div>
            <div className="d-flex justify-content-end"><strong>CGPA: 6.3 / 10</strong></div>
          </div>

          <div className="experience-item mb-4">
            <h4 className="mb-1">Bachelor of Computer Applications (BCA)</h4>
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <span className="company"><i className="fas fa-university me-2"></i>Chintamanrao Institute of Management and Development Research, Sangli</span>
              <span className="duration text-nowrap"><i className="far fa-calendar-alt me-1"></i>2019 – 2022</span>
            </div>
            <div className="d-flex justify-content-end"><strong>CGPA: 7.9 / 10</strong></div>
          </div>

          <div className="experience-item mb-4">
            <h4 className="mb-1">Higher Secondary Certificate (HSC)</h4>
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <span className="company"><i className="fas fa-school me-2"></i>Dr. Bapuji Salunkhe A.C.S. College, Miraj</span>
              <span className="duration text-nowrap"><i className="far fa-calendar-alt me-1"></i>2019</span>
            </div>
            <div className="d-flex justify-content-end"><strong>55%</strong></div>
          </div>

          <div className="experience-item mb-0">
            <h4 className="mb-1">Secondary School Certificate (SSC)</h4>
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <span className="company"><i className="fas fa-school me-2"></i>Ideal English School, Miraj</span>
              <span className="duration text-nowrap"><i className="far fa-calendar-alt me-1"></i>2017</span>
            </div>
            <div className="d-flex justify-content-end"><strong>56%</strong></div>
          </div>
        </div>
      </div>
    </section>
  )
}
