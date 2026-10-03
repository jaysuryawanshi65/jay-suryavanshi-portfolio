import { useMemo, useState } from 'react'

const projects = [
  {
    title: 'Job Management & Recruitment System',
    icon: 'fas fa-briefcase',
    image: '/projects/job-management-system.png',
    desc: 'A full-stack recruitment platform with separate workflows for administrators, recruiters, and job seekers, including job posting, applications, resume uploads, and application tracking.',
    tech: ['ASP.NET Core', '.NET 10', 'React.js', 'PostgreSQL', 'EF Core', 'JWT', 'Docker'],
    code: 'https://github.com/jaysuryawanshi65/job-management-system',
    tags: ['Full Stack', '.NET']
  },
  {
    title: 'Library Management System',
    icon: 'fas fa-book',
    image: '/projects/library-management-system.png',
    desc: 'A secure full-stack library platform for managing books, members, borrowing and returns, with role-based access and automatic fine calculation.',
    tech: ['Java 21', 'Spring Boot', 'React.js', 'MySQL', 'Spring Security', 'JWT'],
    code: 'https://github.com/jaysuryawanshi65/library-management-system',
    tags: ['Full Stack', 'Java']
  },
  {
    title: 'MediLink – Hyperlocal Online Medicine Ordering Platform',
    icon: 'fas fa-pills',
    desc: 'A full-stack hyperlocal medicine ordering platform connecting customers with nearby pharmacies, with separate customer and pharmacy workflows.',
    tech: ['C#', 'ASP.NET Core', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'Docker'],
    code: 'https://github.com/Rushi097/MediLink_Test/tree/jay',
    tags: ['Full Stack', '.NET', 'Java']
  },
  {
    title: 'ShopSphere – E-commerce Frontend',
    icon: 'fas fa-shopping-cart',
    image: '/projects/shopsphere.png',
    desc: 'A modern responsive e-commerce application with product browsing, search, filtering, wishlist, persistent cart, checkout validation, and REST API integration.',
    tech: ['React 19', 'Vite', 'JavaScript', 'Tailwind CSS', 'Axios', 'REST API'],
    code: 'https://github.com/jaysuryawanshi65/shopsphere',
    tags: ['Frontend', 'React']
  },
  {
    title: 'FinTrack – Personal Finance Dashboard',
    icon: 'fas fa-chart-line',
    image: '/projects/fintrack.png',
    desc: 'A responsive personal finance dashboard for tracking income, expenses, budgets and spending analytics with persistent browser storage and interactive charts.',
    tech: ['React 18', 'Vite', 'JavaScript', 'Tailwind CSS', 'Context API', 'Recharts'],
    code: 'https://github.com/jaysuryawanshi65/fintrack',
    tags: ['Frontend', 'React']
  },
  {
    title: 'Food Delivery Website',
    icon: 'fas fa-utensils',
    image: '/projects/food-delivery.png',
    desc: 'A collaborative food delivery website that allows users to browse menus, place orders, and manage the food ordering workflow.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/jaysuryawanshi65/yummy-food-delivery',
    tags: ['Full Stack', 'Web']
  },
  {
    title: 'Car Rental System',
    icon: 'fas fa-car',
    image: '/projects/car-rental-system.png',
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
        <h2 className="text-center mb-2 section-title">Featured Projects</h2>
        <p className="text-center mb-4" style={{ color: 'var(--muted)' }}>
          A selection of full-stack and frontend applications built with modern web technologies.
        </p>

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
                <div className={`project-cover ${project.image ? 'has-image' : ''}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      loading="lazy"
                      className="project-cover-image"
                    />
                  ) : (
                    <div className="project-icon"><i className={project.icon}></i></div>
                  )}
                  <span>Featured Project</span>
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
                      <i className="fab fa-github me-1"></i>View Code
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
