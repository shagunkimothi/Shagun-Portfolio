import SectionTitle from '../components/SectionTitle'
import { GraduationCap, MapPin, Code2 } from 'lucide-react'
export default function About() {
  return <section id="about" className="section section-alt"><div className="container">
    <SectionTitle eyebrow="01 / THE PERSON BEHIND THE CODE" title="A little about me" description="Curious about the systems behind the screen — and the details that make an experience feel effortless."/>
    <div className="about-grid">
      <div className="about-text"><p className="lead">I'm a Computer Science student at <strong>UPES</strong>, specializing in Cloud Computing & Virtualization.</p><p>I enjoy exploring how applications work beyond the interface — connecting frontend experiences with APIs, databases, cloud infrastructure, automation, and monitoring. I like learning by building, experimenting, debugging, and understanding why a system works the way it does.</p><p>My current interests sit at the intersection of AWS, serverless architecture, DevOps, full-stack development, and practical AI integrations.</p><div className="about-facts"><span><MapPin size={16}/> Dehradun, India</span><span><Code2 size={16}/> Builder mindset</span></div></div>
      <div className="education-card"><div className="card-icon"><GraduationCap/></div><span className="eyebrow">EDUCATION</span><h3>University of Petroleum and Energy Studies</h3><p>B.Tech · Computer Science Engineering</p><p className="muted">Cloud Computing & Virtualization</p><div className="education-bottom"><span>2023 — 2027</span><strong>CGPA 7.20 / 10</strong></div></div>
    </div>
  </div></section>
}
