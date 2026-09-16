const education = [
  ['PGCP-AC (Post Graduate Certificate Programme in Advanced Computing)', 'Centre for Development of Advanced Computing (CDAC), MET Bandra, Mumbai', 'February 2026 – August 2026', ''],
  ['Master of Computer Applications (MCA)', 'VP Institute of Management & Development Research, Sangli', '2022 – 2024', 'CGPA: 6.3 / 10'],
  ['Bachelor of Computer Applications (BCA)', 'Chintamanrao Institute of Management and Development Research, Sangli', '2019 – 2022', 'CGPA: 7.9 / 10'],
  ['Higher Secondary Certificate (HSC)', 'Dr. Bapuji Salunkhe A.C.S. College, Miraj', '2019', '55%'],
  ['Secondary School Certificate (SSC)', 'Ideal English School, Miraj', '2017', '56%']
]

export default function Education() {
  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map(([title, institute, duration, result], index) => (
            <div className="experience-item" key={title}>
              <div className="d-flex justify-content-between gap-3 flex-wrap">
                <div><h4 className="mb-1">{title}</h4><span className="company"><i className="fas fa-graduation-cap me-2"></i>{institute}</span></div>
                <div className="text-lg-end"><span className="duration"><i className="far fa-calendar me-1"></i>{duration}</span>{result && <div className="mt-1"><strong>{result}</strong></div>}</div>
              </div>
              {index === 0 && <span className="hero-eyebrow mt-3">Latest Qualification</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
