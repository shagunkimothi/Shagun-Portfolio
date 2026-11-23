import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Award, Download } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return <section id="home" className="hero section">
    <div className="hero-grid container">
      <motion.div className="hero-copy" initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <div className="availability"><span className="pulse"/> OPEN TO OPPORTUNITIES <span className="availability-line"/></div>
        <p className="hero-kicker">HELLO, WORLD. I'M</p>
        <h1>Shagun<br/><span>Kimothi<span className="accent-dot">.</span></span></h1>
        <p className="hero-role">Cloud & Full-Stack Developer <span>·</span> AWS <span>·</span> DevOps</p>
        <p className="hero-description">I build thoughtful web experiences and explore what powers them — from cloud infrastructure and serverless workflows to APIs, automation, and AI-powered applications.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
          <a className="button button-ghost" href={profile.resume} target="_blank" rel="noreferrer"><Download size={16}/> Resume</a>
        </div>
        <div className="social-row">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>}
          <a href={profile.credly} target="_blank" rel="noreferrer"><Award size={17}/> Credly</a>
        </div>
      </motion.div>
      <motion.div className="code-window" initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.8,delay:.15}}>
        <div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>shagun.py</span><span className="window-lang">PYTHON 3</span></div>
        <div className="code-content">
          <div className="code-line"><span className="line-no">01</span><span><b className="purple">class</b> <b className="green">Developer</b>:</span></div>
          <div className="code-line"><span className="line-no">02</span><span className="indent"><b className="purple">def</b> <b className="yellow">__init__</b>(self):</span></div>
          <div className="code-line"><span className="line-no">03</span><span className="indent2">self.name = <b className="orange">"Shagun"</b></span></div>
          <div className="code-line"><span className="line-no">04</span><span className="indent2">self.focus = [</span></div>
          <div className="code-line"><span className="line-no">05</span><span className="indent3"><b className="orange">"Cloud Engineering"</b>,</span></div>
          <div className="code-line"><span className="line-no">06</span><span className="indent3"><b className="orange">"Full-Stack Development"</b>,</span></div>
          <div className="code-line"><span className="line-no">07</span><span className="indent3"><b className="orange">"DevOps & AI"</b></span></div>
          <div className="code-line"><span className="line-no">08</span><span className="indent2">]</span></div>
          <div className="code-line"><span className="line-no">09</span><span className="indent"><b className="purple">def</b> <b className="yellow">build</b>(self, idea):</span></div>
          <div className="code-line"><span className="line-no">10</span><span className="indent2"><b className="purple">return</b> idea + <b className="orange">" → reality"</b><span className="cursor">▍</span></span></div>
        </div>
        <div className="window-footer"><span><i className="status-dot"/> Ready to build</span><span>UTF-8 · LF</span></div>
        <div className="code-glow"/>
      </motion.div>
    </div>
    <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
  </section>
}
