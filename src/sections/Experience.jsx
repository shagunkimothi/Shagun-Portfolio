import SectionTitle from '../components/SectionTitle'
import { experience } from '../data/profile'
export default function Experience() {
  return <section id="experience" className="section section-alt"><div className="container">
    <SectionTitle eyebrow="03 / WHERE I'VE LEARNED" title="Experience" description="A few chapters of building, collaborating, and learning in real project environments."/>
    <div className="timeline">{experience.map((job, i) => <article className="timeline-item" key={job.company}><div className="timeline-marker">{String(i+1).padStart(2,'0')}</div><div className="timeline-card"><div className="timeline-top"><div><h3>{job.company}</h3><p className="role">{job.role}</p></div><span className="date">{job.date}</span></div><ul>{job.points.map(p => <li key={p}>{p}</li>)}</ul><p className="stack-line">{job.stack}</p></div></article>)}</div>
  </div></section>
}
