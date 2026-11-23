import PageHeader from '../components/PageHeader'
import { skills } from '../data/profile'
import { Code2, LayoutTemplate, ServerCog, Cloud, Boxes, Database, Bot, Cpu } from 'lucide-react'

const icons = [Code2, LayoutTemplate, ServerCog, Cloud, Boxes, Database, Bot, Cpu]
const groups = [
  ['Programming Languages','Languages'],
  ['Frontend Development','Frontend & Backend'],
  ['Backend Development','Frontend & Backend'],
  ['AWS & Cloud Computing','Cloud & AWS'],
  ['DevOps & Infrastructure','DevOps & Infrastructure'],
  ['Databases','Data & AI'],
  ['AI & RAG','Data & AI'],
  ['Core Computer Science','Core CS'],
]
export default function Skills() {
  const split = {
    'Frontend Development':['React','HTML','CSS','Tailwind CSS','Axios'],
    'Backend Development':['FastAPI','Flask','REST APIs','JWT','OAuth 2.0','SQLAlchemy'],
  }
  return <div className="page" id="top">
    <PageHeader index="04" eyebrow="SKILLS" title="A practical, growing toolkit." description="Technologies organized by the part of a system they help me build." />
    <div className="skills-grid">{groups.map(([title,key],i) => { const Icon=icons[i]; const items=split[title] || skills[key] || []; return <article className="skill-card" key={title}><Icon/><span className="eyebrow">{String(i+1).padStart(2,'0')}</span><h2>{title}</h2><div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article> })}</div>
  </div>
}
