import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Github, Check, ExternalLink } from 'lucide-react'
import { projects } from '../data/profile'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  if (!project) return <NotFound />
  return <div className="page project-detail" id="top">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/projects">Projects</Link><span>/</span><span>{project.name}</span></nav>
    <header className="detail-header"><div><span className="eyebrow">PROJECT / {project.number}</span><h1>{project.name}</h1><p>{project.description}</p></div><div className="detail-actions"><a className="button button-primary" href={project.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub repository</a>{project.liveDemo && <a className="button button-ghost" href={project.liveDemo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14}/></a>}</div></header>
    <section className="detail-grid">
      <article><span className="eyebrow">OVERVIEW</span><h2>Problem statement</h2><p>{project.problem}</p><h3>Objective</h3><p>{project.objective}</p></article>
      <aside><span className="eyebrow">TECHNOLOGIES</span><div className="tag-list">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></aside>
    </section>
    <section className="detail-section"><span className="eyebrow">SOLUTION</span><h2>How it fits together</h2><p>{project.solution}</p></section>
    <section className="detail-section"><span className="eyebrow">ARCHITECTURE DIAGRAM</span><h2>System flow</h2><div className="architecture-diagram" role="img" aria-label={`${project.name} architecture flow`}>{project.architecture.map((node,i)=><div className="architecture-step" key={node}><span>{String(i+1).padStart(2,'0')}</span><strong>{node}</strong></div>)}</div><p className="simulation-note">Conceptual diagram based on the repository README and structure.</p></section>
    <section className="detail-section"><span className="eyebrow">FEATURES</span><h2>What this project includes</h2><div className="feature-grid">{project.features.map(feature => <div key={feature}><Check size={16}/><p>{feature}</p></div>)}</div></section>
    <section className="detail-section"><span className="eyebrow">IMPLEMENTATION DETAILS</span><h2>Inside the repository</h2><p>{project.implementation}</p></section>
    <section className="detail-section"><span className="eyebrow">ARCHITECTURE & WORKFLOW</span><h2>Implementation flow</h2><div className="workflow">{project.workflow.map((step,i) => <div key={step}><span>{String(i+1).padStart(2,'0')}</span><p>{step}</p></div>)}</div></section>
    {project.screenshots?.length > 0 && <section className="detail-section"><span className="eyebrow">REPOSITORY SCREENSHOTS</span><h2>From the project README</h2><div className="project-screenshots">{project.screenshots.map(image=><figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" onError={event => { event.currentTarget.closest('figure').hidden = true }}/><figcaption>{image.alt}</figcaption></figure>)}</div></section>}
    <section className="detail-section challenge"><span className="eyebrow">CHALLENGES & LEARNING</span><h2>What I learned</h2><p>{project.challenges}</p></section>
    <section className="detail-section"><span className="eyebrow">SETUP & USAGE</span><h2>Run or explore the project</h2><ol className="setup-list">{project.setup.map(step=><li key={step}>{step}</li>)}</ol><a className="text-link" href={project.readme} target="_blank" rel="noreferrer">Read the full setup guide <ExternalLink size={14}/></a></section>
    <Link className="text-link" to="/projects"><ArrowLeft size={15}/> Back to all projects</Link>
  </div>
}
