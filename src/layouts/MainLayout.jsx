import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Home, UserRound, BriefcaseBusiness, Boxes, FlaskConical, Wrench, Award, Terminal, FileText, Mail, Github, Linkedin, Menu, X, ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

const nav = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About', to: '/about', icon: UserRound },
  { label: 'Experience', to: '/experience', icon: BriefcaseBusiness },
  { label: 'Projects', to: '/projects', icon: Boxes },
  { label: 'Engineering Lab', to: '/lab', icon: FlaskConical },
  { label: 'Skills', to: '/skills', icon: Wrench },
  { label: 'Certifications', to: '/certifications', icon: Award },
  { label: 'Terminal', to: '/terminal', icon: Terminal },
  { label: 'Resume', to: '/resume', icon: FileText },
  { label: 'Contact', to: '/contact', icon: Mail },
]

export default function MainLayout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [location.pathname, reduceMotion])
  return <div className="app-shell">
    <header className="site-header">
      <nav className="nav container" aria-label="Primary navigation">
        <NavLink className="sidebar-brand" to="/" aria-label="Go to homepage">
          <span className="brand-mark">S<span>.</span></span>
          <span><strong>Shagun Kimothi</strong><small>Cloud · Code · Curiosity</small></span>
        </NavLink>
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="primary-links"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
        <div className="sidebar-social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>}
          <a href={profile.credly} target="_blank" rel="noreferrer" aria-label="Credly"><Award size={17}/></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a>
        </div>
        <div id="primary-links" className={`sidebar-nav ${open ? 'is-open' : ''}`}>
          {nav.map(({label,to,icon:Icon}) => <NavLink key={to} to={to} end={to === '/'} className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}><Icon size={17}/><span>{label}</span></NavLink>)}
        </div>
      </nav>
    </header>
    <main className="main-content">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={reduceMotion ? false : {opacity:0,y:10}}
          animate={{opacity:1,y:0}}
          exit={reduceMotion ? undefined : {opacity:0,y:-6}}
          transition={{duration:reduceMotion ? 0 : .28}}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <footer className="footer"><p>Designed with curiosity. Built with code.</p><small>© {new Date().getFullYear()} Shagun Kimothi</small><a href="#top" aria-label="Back to top"><ArrowUp size={16}/></a></footer>
    </main>
  </div>
}
