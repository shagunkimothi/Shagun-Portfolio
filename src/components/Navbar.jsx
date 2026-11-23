import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Lab', 'Credentials', 'Contact']
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="nav-wrap">
    <nav className="nav container">
      <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">S<span>.</span></span><span>SHAGUN KIMOTHI</span></a>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      <div className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
        <a className="nav-cta" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={15}/></a>
      </div>
    </nav>
  </header>
}
