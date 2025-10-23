const projects = [
  {
    title: 'Yummy Food Delivery',
    img: '/img/yummy-food-delivery.png',
    desc: 'A responsive food delivery UI with modern components and interactions.',
    tech: ['React', 'CSS', 'Vite'],
    live: 'https://yummy-food-delivery-three.vercel.app',
    code: 'https://github.com/jaysuryawanshi65/yummy-food-delivery',
    tags: ['UI/UX', 'Responsive']
  },
  {
    title: 'YouTube Clone',
    img: '/img/youtube-clone.png',
    desc: 'A functional video platform interface inspired by YouTube.',
    tech: ['React', 'CSS', 'API'],
    live: 'https://youtube-clone-three-hazel-92.vercel.app',
    code: 'https://github.com/jaysuryawanshi65/youtube-clone',
    tags: ['Media', 'SPA']
  },
  {
    title: 'Netflix Clone (React)',
    img: '/img/netflix-clone.png',
    desc: 'A Netflix-like UI with sections and hover interactions.',
    tech: ['React', 'CSS', 'TMDB API'],
    live: 'https://netflix-clone-react-green-eight.vercel.app',
    code: 'https://github.com/jaysuryawanshi65/Netflix-Clone-React',
    tags: ['Entertainment', 'Responsive']
  }
]

import { useMemo, useState } from 'react'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const tags = useMemo(() => ['All', ...Array.from(new Set(projects.flatMap(p => p.tags || [])))], [])
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter(p => (p.tags || []).includes(filter)), [filter])

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 section-title">Projects</h2>
        <div className="filter-bar mb-3">
          {tags.map(t => (
            <span key={t} className={`filter-chip ${filter === t ? 'active' : ''}`} onClick={() => setFilter(t)}>{t}</span>
          ))}
        </div>
        <div className="row g-4">
          {filtered.map((p) => (
            <div key={p.title} className="col-md-4">
              <div className="project-card redesigned">
                <div className="project-img">
                  <img src={p.img} alt={p.title} />
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h5 className="card-title mb-0">{p.title}</h5>
                    <div className="project-chips d-none d-md-flex gap-1">
                      {p.tags?.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </div>
                  <p className="card-text mb-3">{p.desc}</p>
                  <div className="tech-stack mb-3">
                    {p.tech.map((t) => (
                      <span key={t} className="badge bg-primary">{t}</span>
                    ))}
                  </div>
                  <div className="project-actions d-flex gap-2">
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-gradient btn-sm"><i className="fas fa-link me-1"></i>Live</a>
                    <a href={p.code} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm"><i className="fab fa-github me-1"></i>Code</a>
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
