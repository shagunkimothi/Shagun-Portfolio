import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/profile'
export default function Skills() {
  return <section id="skills" className="section"><div className="container">
    <SectionTitle eyebrow="02 / MY TOOLKIT" title="Technologies I work with" description="A growing toolkit across software development, cloud infrastructure, and automation."/>
    <div className="skills-grid">{Object.entries(skills).map(([group, items], i) => <article className="skill-card" key={group}><div className="skill-number">0{i+1}</div><h3>{group}</h3><div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}</div>
  </div></section>
}
