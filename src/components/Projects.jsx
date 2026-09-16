import { useMemo, useState } from 'react'

const projects = [
  {
    title: 'MediLink – Hyperlocal Online Medicine Ordering Platform',
    icon: 'fas fa-pills',
    desc: 'A full-stack hyperlocal medicine ordering platform connecting customers with nearby pharmacies, with separate customer and pharmacy workflows.',
    tech: ['C#', 'ASP.NET Core', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'Docker'],
    code: 'https://github.com/Rushi097/MediLink_Test/tree/jay',
    tags: ['Full Stack', '.NET', 'Java']
  },
  {
    title: 'Food Delivery Website',
    icon: 'fas fa-utensils',
    desc: 'A collaborative food delivery website that allows users to browse menus, place orders, and track deliveries with authentication and order management.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/jaysuryawanshi65/yummy-food-delivery',
    tags: ['Full Stack', 'Web']
  },
  {
    title: 'Car Rental System',
    icon: 'fas fa-car',
    desc: 'A web-based car rental system supporting customer registration, car search, booking, rental history, and an admin module for reservations.',
    tech: ['ASP.NET MVC', 'C#', 'SQL Server'],
    code: 'https://github.com/jaysuryawanshi65/car_rental_system',
    tags: ['.NET', 'Web']
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const tags = useMemo(() => ['All', ...Array.from(new Set(projects.flatMap(p => p.tags || [])))], [])
  const filtered = useMemo(
    () => filter === 'All' ? projects : projects.filter(p => (p.tags || []).includes(filter)),
    [filter]
  )

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 section-title">Academic Projects</h2>

        <div className="filter-bar mb-4">
          {tags.map((tag) => (
            <button
              type="button"
              key={tag}
              className={`filter-chip ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filtered.map((project) => (
            <div key={project.title} className="col-md-6 col-lg-4">
              <div className="project-card redesigned">
                <div className="project-cover">
                  <div className="project-icon"><i className={project.icon}></i></div>
                  <span>Academic Project</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.desc}</p>

                  <div className="tech-stack mb-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="badge">{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions d-flex gap-2 mt-auto">
                    <a href={project.code} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm">
                      <i className="fab fa-github me-1"></i>Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
