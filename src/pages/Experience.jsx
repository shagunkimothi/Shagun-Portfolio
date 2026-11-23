import PageHeader from '../components/PageHeader'
import { experience } from '../data/profile'

export default function Experience() {
  return <div className="page" id="top">
    <PageHeader index="02" eyebrow="EXPERIENCE" title="Learning through real work." description="Internship experiences across cloud engineering, frontend development, and React." />
    <div className="timeline">{experience.map((job,i) => <article className="timeline-item" key={job.company}><span className="timeline-marker">{String(i+1).padStart(2,'0')}</span><div className="timeline-card"><div className="timeline-top"><div><h2>{job.company}</h2><p>{job.role}</p></div><time>{job.date}</time></div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul><div className="stack-line">{job.stack}</div></div></article>)}</div>
  </div>
}
