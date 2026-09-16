import { useEffect } from 'react'

export default function useScrollEffects() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const clickHandler = (e) => {
      const target = e.currentTarget.getAttribute('href')
      if (target && target.startsWith('#')) {
        e.preventDefault()
        const el = document.querySelector(target)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    const anchorLinks = Array.from(document.querySelectorAll('a[href^="#"]'))
    anchorLinks.forEach((a) => a.addEventListener('click', clickHandler))

    // Add animation classes to elements
    const addAnimateClass = () => {
      document.querySelectorAll('section, .skill-category, .experience-item, .project-card')
        .forEach((el) => el.classList.add('animate-on-scroll'))
    }
    addAnimateClass()

    // Scroll animation visibility
    const onScrollAnimate = () => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      const screenPosition = window.innerHeight
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        if (elementPosition < screenPosition - 100) {
          element.classList.add('visible')
        }
      })
    }

    // Reveal section titles on intersection
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          titleObserver.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -20% 0px' })
    document.querySelectorAll('.section-title').forEach((el) => titleObserver.observe(el))

    // Active nav link on scroll
    const onScrollActive = () => {
      const sections = document.querySelectorAll('section[id]')
      const navLinks = document.querySelectorAll('.nav-link')
      const scroll = window.scrollY
      sections.forEach((section) => {
        const top = section.offsetTop - 100
        const bottom = top + section.offsetHeight
        const id = section.getAttribute('id')
        if (scroll >= top && scroll < bottom) {
          navLinks.forEach((link) => {
            link.classList.remove('active')
            if (link.getAttribute('href') === `#${id}`) link.classList.add('active')
          })
        }
      })
    }

    // Navbar subtle shadow on scroll (no background overrides)
    const onScrollNavbar = () => {
      const navbar = document.querySelector('.navbar')
      if (!navbar) return
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)'
      } else {
        navbar.style.boxShadow = 'none'
      }
    }

    // Hover effects for skill items via JS (CSS hover already handles it, but keep parity)
    const skillItems = Array.from(document.querySelectorAll('.skill-category ul li'))
    const onMouseOver = function () { this.style.transform = 'scale(1.05)' }
    const onMouseOut = function () { this.style.transform = 'scale(1)' }
    skillItems.forEach((item) => {
      item.addEventListener('mouseover', onMouseOver)
      item.addEventListener('mouseout', onMouseOut)
    })

    const onScroll = () => {
      onScrollAnimate()
      onScrollActive()
      onScrollNavbar()
    }

    window.addEventListener('scroll', onScroll)
    // initial tick
    onScroll()

    return () => {
      anchorLinks.forEach((a) => a.removeEventListener('click', clickHandler))
      window.removeEventListener('scroll', onScroll)
      skillItems.forEach((item) => {
        item.removeEventListener('mouseover', onMouseOver)
        item.removeEventListener('mouseout', onMouseOut)
      })
      try { titleObserver.disconnect() } catch {}
    }
  }, [])
}
