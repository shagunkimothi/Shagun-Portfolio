import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin, Award, Mail, Code2, Cloud, Braces } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile, projects } from '../data/profile'

export default function Home() {
  const reduceMotion = useReducedMotion()
  return <div className="page home-page" id="top">
    <section className="home-hero">
      <motion.div className="hero-copy" initial={reduceMotion ? false : {opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:reduceMotion ? 0 : .45}}>
        <span className="availability"><i/> CURIOUS BY NATURE · BUILDER BY CHOICE</span>
        <p className="hero-kicker">A LITTLE ABOUT ME</p>
        <p className="hero-name">Shagun Kimothi</p>
        <h1>Building thoughtful <span>experiences,</span> one line at a time.</h1>
        <h2>Cloud & Full-Stack Developer</h2>
        <p className="hero-description">Hi, I'm Shagun — a Computer Science student exploring cloud engineering, full-stack development, DevOps, and AI-powered applications.</p>
        <div className="hero-actions"><Link className="button button-primary" to="/projects">View projects <ArrowUpRight size={16}/></Link><a className="button button-ghost" href={profile.resume} download><Download size={16}/> Download resume</a></div>
        <div className="social-row"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>}<a href={profile.credly} target="_blank" rel="noreferrer"><Award size={16}/> Credly</a></div>
      </motion.div>
      <motion.div className="code-window" initial={reduceMotion ? false : {opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{duration:reduceMotion ? 0 : .45,delay:reduceMotion ? 0 : .12}}>
        <div className="window-bar"><span className="window-dots"><i/><i/><i/></span><span>workspace / developer.py</span></div>
        <div className="code-content">
          <div><span className="line-no">01</span><b className="purple">class</b> <b className="green">Shagun</b>:</div>
          <div><span className="line-no">02</span>  focus = [</div>
          <div><span className="line-no">03</span>    <b className="orange">"cloud engineering"</b>,</div>
          <div><span className="line-no">04</span>    <b className="orange">"full-stack development"</b>,</div>
          <div><span className="line-no">05</span>    <b className="orange">"DevOps & AI"</b></div>
          <div><span className="line-no">06</span>  ]</div>
          <div><span className="line-no">07</span>  mindset = <b className="orange">"learn by building"</b><span className="cursor">▍</span></div>
        </div>
        <div className="window-status"><span><i/> Ready to build</span><span>Python · UTF-8</span></div>
      </motion.div>
      <div className="hero-art" aria-hidden="true">
        <svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M160 369C163 284 157 205 161 108C162 75 172 42 195 17"/>
          <path d="M160 283C136 263 116 238 105 205M160 247C185 229 201 206 209 177M160 206C138 184 127 163 124 136M163 161C183 143 193 122 194 99M159 323C184 304 204 281 216 251"/>
          <path className="botanical-leaf" d="M105 205C81 206 68 189 72 169C95 170 107 183 105 205Z"/>
          <path className="botanical-leaf" d="M108 211C88 198 82 179 91 162C111 176 117 193 108 211Z"/>
          <path className="botanical-leaf" d="M208 178C228 164 249 169 257 187C238 200 219 197 208 178Z"/>
          <path className="botanical-leaf" d="M211 178C208 154 220 138 240 136C243 159 231 175 211 178Z"/>
          <path className="botanical-leaf" d="M124 137C104 127 98 109 107 91C126 103 132 120 124 137Z"/>
          <path className="botanical-leaf" d="M124 137C126 113 140 99 160 102C158 125 145 138 124 137Z"/>
          <path className="botanical-leaf" d="M194 99C177 84 177 64 191 50C207 66 208 84 194 99Z"/>
          <path className="botanical-leaf" d="M194 99C201 77 219 67 237 75C230 96 214 105 194 99Z"/>
          <path className="botanical-leaf" d="M216 251C197 235 198 215 213 201C228 218 230 237 216 251Z"/>
          <path className="botanical-leaf" d="M216 251C224 229 242 220 260 230C251 250 235 257 216 251Z"/>
          <ellipse cx="198" cy="21" rx="8" ry="12" transform="rotate(31 198 21)"/>
        </svg>
      </div>
      <span className="floating-note" aria-hidden="true">currently learning · AWS</span>
    </section>
    <section className="home-featured">
      <div className="section-heading"><div><span className="eyebrow">SELECTED WORK</span><h2>Featured projects</h2></div><Link className="text-link" to="/projects">View all <ArrowUpRight size={15}/></Link></div>
      <div className="featured-grid">{projects.map(project => <Link to={`/projects/${project.slug}`} className="featured-card" key={project.slug}><span className="project-number">{project.number}</span><div className="project-glyph">{project.categories.includes('Cloud & AWS') ? <Cloud/> : project.categories.includes('AI & RAG') ? <Braces/> : <Code2/>}</div><small>{project.type}</small><h3>{project.name}</h3><p>{project.description}</p><span className="text-link">Explore project <ArrowUpRight size={14}/></span></Link>)}</div>
    </section>
  </div>
}
