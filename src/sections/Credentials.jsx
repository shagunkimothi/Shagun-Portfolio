import SectionTitle from '../components/SectionTitle'
import { certifications, achievements, profile } from '../data/profile'
import { Award, ExternalLink, Trophy } from 'lucide-react'
export default function Credentials() {
  return <section id="credentials" className="section section-alt"><div className="container">
    <SectionTitle eyebrow="06 / LEARNING & CONTRIBUTIONS" title="Credentials & milestones" description="Learning is ongoing. Here are a few credentials and community contributions along the way."/>
    <div className="credential-grid"><div className="credential-card"><div className="credential-head"><Award/><span className="eyebrow">CERTIFICATIONS & TRAINING</span></div>{certifications.map((c,i)=><div className="credential-row" key={c}><span className="credential-count">0{i+1}</span><p>{c}</p></div>)}<a className="text-link" href={profile.credly} target="_blank" rel="noreferrer">View all credentials <ExternalLink size={15}/></a></div>
    <div className="credential-card"><div className="credential-head"><Trophy/><span className="eyebrow">ACHIEVEMENTS</span></div>{achievements.map(a=><div className="achievement" key={a.title}><h3>{a.title}</h3><p>{a.subtitle}</p><span>{a.note}</span></div>)}</div></div>
  </div></section>
}
