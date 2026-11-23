import PageHeader from '../components/PageHeader'
import { certifications, achievements, profile } from '../data/profile'
import { Award, ExternalLink, Trophy } from 'lucide-react'

export default function Certifications() {
  return <div className="page" id="top">
    <PageHeader index="05" eyebrow="CREDENTIALS" title="Credentials & milestones." description="Formal cloud learning alongside open-source and community contributions." />
    <div className="credential-layout">
      <section><div className="credential-section-title"><Award/><h2>Certifications</h2></div>{certifications.map((cert,i) => <article className="credential-card" key={cert}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{cert}</h3><p>AWS training credential</p></div></article>)}<a className="text-link" href={profile.credly} target="_blank" rel="noreferrer">View Credly profile <ExternalLink size={15}/></a></section>
      <section><div className="credential-section-title"><Trophy/><h2>Achievements</h2></div>{achievements.map(item => <article className="achievement-card" key={item.title}><span className="eyebrow">ACHIEVEMENT</span><h3>{item.title}</h3><p>{item.subtitle}</p><strong>{item.note}</strong></article>)}</section>
    </div>
  </div>
}
