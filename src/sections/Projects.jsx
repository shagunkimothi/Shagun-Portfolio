import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/profile'
import { Github, ArrowUpRight, X, Layers3 } from 'lucide-react'

function ProjectModal({ project, onClose }) {
  if (!project) return null
  return <div className="modal-backdrop" role="presentation" onClick={onClose}><div className="project-modal" role="dialog" aria-modal="true" aria-label={project.name} onClick={e => e.stopPropagation()}>
    <button className="modal-close" onClick={onClose} aria-label="Close"><X/></button><span className="eyebrow">PROJECT / {project.number}</span><h2>{project.name}</h2><p className="modal-desc">{project.details}</p><h4>What it includes</h4><ul className="feature-list">{project.features.map(f => <li key={f}>{f}</li>)}</ul><div className="tag-list">{project.stack.map(s => <span className="tag" key={s}>{s}</span>)}</div><a className="button button-primary modal-link" href={project.github} target="_blank" rel="noreferrer"><Github size={16}/> Explore repository <ArrowUpRight size={16}/></a>
  </div></div>
}
export default function Projects() {
  const [selected, setSelected] = useState(null)
  return <section id="projects" className="section"><div className="container">
    <SectionTitle eyebrow="04 / SELECTED BUILDS" title="Projects with purpose" description="A selection of things I've built and explored — from cloud-native workflows to developer tools."/>
    <div className="projects-grid">{projects.map((p) => <article className="project-card" key={p.number}><div className="project-top"><span className="project-num">{p.number}</span><span className="project-type">{p.type}</span></div><div className="project-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-core"><Layers3 size={32}/></div><span className="art-label">{p.architecture ? 'AWS / EVENT-DRIVEN' : p.rag ? 'AI / RETRIEVAL' : 'AUTOMATION / CI-CD'}</span></div><h3>{p.name}</h3><p>{p.description}</p><div className="tag-list">{p.stack.slice(0,5).map(s => <span className="tag" key={s}>{s}</span>)}</div><div className="project-actions"><button className="text-link" onClick={() => setSelected(p)}>Explore details <ArrowUpRight size={16}/></button><a href={p.github} target="_blank" rel="noreferrer" aria-label={`GitHub repository for ${p.name}`}><Github size={18}/></a></div></article>)}</div>
    <div className="github-more"><div><span className="eyebrow">MORE EXPERIMENTS & LEARNING</span><h3>There's more on GitHub.</h3><p>Lab work, cloud learning notes, and smaller explorations.</p></div><div className="repo-links"><a href="https://github.com/shagunkimothi/devops-and-containerisation" target="_blank" rel="noreferrer">DevOps & Containerization <ArrowUpRight size={15}/></a><a href="https://github.com/shagunkimothi/aws-cloud-journey" target="_blank" rel="noreferrer">AWS Cloud Journey <ArrowUpRight size={15}/></a><a className="all-repos" href="https://github.com/shagunkimothi" target="_blank" rel="noreferrer">View all repositories <ArrowUpRight size={15}/></a></div></div>
  </div><ProjectModal project={selected} onClose={() => setSelected(null)}/></section>
}
