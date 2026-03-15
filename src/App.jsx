import './App.css'

const GITHUB_URL = 'https://github.com/AndileMahlaba'
const LINKEDIN_URL = 'https://www.linkedin.com/in/andile-mahlaba-a2a956373/'
const NDSIS_LIVE = 'https://national-digital-id.onrender.com/'
const EMAIL = 'mahlabandile59@gmail.com'
const PHONE = '072 974 1554'
const PHONE_TEL = 'tel:+27729741554'

const SKILLS = [
  'Python', 'Java', 'JavaScript', 'React', 'Flask', 'SQL', 'PostgreSQL',
  'REST APIs', 'Git', 'Supabase', 'HTML & CSS', 'System Design'
]

const PROJECTS = [
  {
    title: 'National Digital Student Identity System (NDSIS)',
    featured: false,
    role: 'Founder · Startup in development',
    desc: 'National digital student identity platform for South African higher education — one verified credential per student (QR, link, digital ID) that employers and institutions can verify in seconds. Currently in pilot. Multi-tenant architecture (Flask, PostgreSQL/Supabase) with Student, Employer, Institution, and Admin portals.',
    tags: ['Python', 'Flask', 'PostgreSQL', 'Supabase', 'Multi-tenant', 'RBAC'],
    repo: null,
    live: NDSIS_LIVE,
  },
  {
    title: 'DUT Alumni Platform',
    featured: false,
    role: 'Web application',
    desc: 'Web application for Durban University of Technology alumni — connecting graduates, events, and institutional engagement in a single platform.',
    tags: ['Web', 'Full-stack'],
    repo: null,
    live: null,
  },
  {
    title: 'Insurance Claims OCR Automation',
    featured: false,
    role: 'Automation & document processing',
    desc: 'Exploring systems to automate lodging, noting, and follow-up of claims — aligned with work alongside Claims admin at Bidvest Life Insurance.',
    tags: ['Python', 'OCR', 'Automation'],
    repo: null,
    live: null,
  },
]

function App() {
  const hasPhoto = true

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">AM</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-photo-wrap">
          {hasPhoto ? (
            <img src="/andile.png" alt="Andile Mahlaba" />
          ) : (
            <div className="hero-photo-placeholder">AM</div>
          )}
        </div>
        <p className="hero-tag">Software Developer</p>
        <h1>Andile Mahlaba</h1>
        <p className="hero-sub">
          Full-stack developer · Claims at Bidvest Life Insurance, automating lodging & follow-up · Founder, NDSIS · Building systems that scale.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View my work</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            GitHub →
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-grid">
          <div>
            <span className="about-badge">About me</span>
            <h2>Building at scale</h2>
          </div>
          <div>
            <p>
              I build full-stack applications and systems that solve real problems — and ship them. At <strong style={{ color: 'var(--text)' }}>Bidvest Life Insurance</strong> I work closely with the admin side of the <strong style={{ color: 'var(--text)' }}>Claims</strong> department to automate lodging, noting, and follow-up of claims. I’m also <strong style={{ color: 'var(--text)' }}>Founder</strong> of <strong style={{ color: 'var(--text)' }}>NDSIS</strong> — a national digital student identity platform for SA higher education, currently in pilot with launch planned for 2026.
            </p>
            <p>
              I lead with clear communication, ownership, and delivery — the same approach I brought as <strong style={{ color: 'var(--text)' }}>Deputy Head Boy</strong>. My stack: <strong style={{ color: 'var(--text)' }}>Java</strong>, <strong style={{ color: 'var(--text)' }}>Python</strong>, web (Flask, React), databases, APIs, and system design. I’ve built alumni platforms, OCR-driven automation, and multi-tenant production systems.
            </p>
            <ul className="about-highlights">
              <li>Bidvest Life Insurance, Claims — automating lodging, noting & follow-up</li>
              <li>Founder, NDSIS — national digital identity platform, in pilot</li>
              <li>Full-stack: multi-tenant systems, APIs, OCR automation</li>
              <li>Leadership: ownership, delivery, clear communication</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="section-title">
          <h2>Skills & tools</h2>
          <p>Technologies and practices I use to ship products.</p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <span key={s} className="skill-pill">{s}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="section-title">
          <h2>Selected projects</h2>
          <p>Systems I build and ship.</p>
        </div>
        <div className="projects-list">
          {PROJECTS.map((proj) => (
            <article key={proj.title} className={`project-card ${proj.featured ? 'featured' : ''}`}>
              <div className="project-header">
                <h3 className="project-title">{proj.title}</h3>
                {proj.featured && <span className="project-badge">Featured</span>}
              </div>
              <p className="project-meta">{proj.role}</p>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tags">
                {proj.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {proj.repo && (
                  <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Code</a>
                )}
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live</a>
                )}
              </div>
            </article>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            More on GitHub →
          </a>
        </p>
      </section>

      <section id="contact" className="contact">
        <h2>Get in touch</h2>
        <p>Open to graduate programmes, internships, and full-time roles. Try NDSIS below, or reach out by phone or email.</p>
        <div className="contact-links">
          <a href={NDSIS_LIVE} target="_blank" rel="noopener noreferrer">NDSIS (live)</a>
          <a href={PHONE_TEL}>Call {PHONE}</a>
          <a href={`mailto:${EMAIL}`}>Email</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="contact-email-fallback">
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Or copy email: </span>
          <a href={`mailto:${EMAIL}`} style={{ wordBreak: 'break-all' }}>{EMAIL}</a>
        </p>
      </section>

      <footer>
        © {new Date().getFullYear()} Andile Mahlaba. Built with React + Vite.
      </footer>
    </>
  )
}

export default App
