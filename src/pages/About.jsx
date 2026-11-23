import { GraduationCap, MapPin, Cloud, Code2, Bot } from 'lucide-react'
import PageHeader from '../components/PageHeader'

export default function About() {
  return <div className="page" id="top">
    <PageHeader index="01" eyebrow="ABOUT" title="Curious by nature. Practical by choice." description="My approach combines computer science fundamentals with hands-on exploration of modern systems." />
    <div className="about-layout">
      <article className="about-copy"><p className="lead">I'm a Computer Science Engineering student at <strong>UPES</strong>, interested in how thoughtful interfaces connect with reliable infrastructure.</p><p>I enjoy learning through implementation — turning concepts into working applications, understanding system boundaries, debugging failures, and improving how software behaves in the real world.</p><p>My interests span cloud computing, DevOps, full-stack development, and practical AI integrations. I value clear documentation, maintainable code, and solutions that solve an understandable problem.</p><div className="interest-grid"><div><Cloud/><span>Cloud & infrastructure</span></div><div><Code2/><span>Full-stack systems</span></div><div><Bot/><span>AI & RAG workflows</span></div></div></article>
      <aside className="education-card"><div className="card-icon"><GraduationCap/></div><span className="eyebrow">EDUCATION</span><h2>University of Petroleum and Energy Studies</h2><p>B.Tech · Computer Science Engineering</p><p>Cloud Computing & Virtualization</p><div className="education-meta"><span>2023 — 2027</span><strong>CGPA 7.20 / 10</strong></div></aside>
    </div>
  </div>
}
