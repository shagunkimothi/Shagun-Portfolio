import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Github, BookOpen, Cloud, Braces, Container, FlaskConical, ExternalLink } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { projects, profile } from '../data/profile'
import { githubProjects } from '../data/githubProjects'

const categories = ['All','Cloud & AWS','Full Stack','AI & RAG','DevOps','Learning & Experiments']

export default function Projects() {
  const [filter,setFilter] = useState('All')
  const [repoMetadata,setRepoMetadata] = useState({})
  const [metadataStatus,setMetadataStatus] = useState('loading')

  useEffect(() => {
    let active = true
    Promise.allSettled(githubProjects.map(async project => {
      const response = await fetch(`https://api.github.com/repos/shagunkimothi/${project.repo}`, {
        headers: { Accept: 'application/vnd.github+json' }
      })
      if (!response.ok) throw new Error(`GitHub returned ${response.status} for ${project.repo}`)
      return [project.repo, await response.json()]
    })).then(results => {
      if (!active) return
      const metadata = {}
      let successCount = 0
      results.forEach(result => {
        if (result.status === 'fulfilled') {
          metadata[result.value[0]] = result.value[1]
          successCount += 1
        }
      })
      setRepoMetadata(metadata)
      setMetadataStatus(successCount === githubProjects.length ? 'live' : successCount ? 'partial' : 'fallback')
    })
    return () => { active = false }
  }, [])

  const matches = item => filter === 'All' || item.categories.includes(filter)
  const featured = projects.filter(matches)
  const repositories = githubProjects.filter(item => !item.detailSlug && matches(item))
  const metadataNote = metadataStatus === 'fallback'
    ? 'GitHub metadata is unavailable right now; showing locally verified repository information.'
    : metadataStatus === 'partial'
      ? 'Some GitHub metadata could not be loaded; locally verified repository information remains available.'
      : metadataStatus === 'live'
        ? 'Repository descriptions and primary languages are refreshed from the public GitHub API.'
        : 'Loading public repository metadata; locally verified project information is available meanwhile.'

  return <div className="page" id="top">
    <PageHeader index="03" eyebrow="PROJECTS" title="Real repositories. Documented work." description="Featured technical case studies and additional projects from my public GitHub profile." actions={<a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub profile <ExternalLink size={14}/></a>} />
    <div className="filter-bar" role="group" aria-label="Project categories">{categories.map(category => <button key={category} className={filter === category ? 'active' : ''} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div>
    <p className="github-metadata-note" role="status">{metadataNote}</p>
    {featured.length > 0 && <section className="project-list-section"><div className="project-list-heading"><span className="eyebrow">FEATURED CASE STUDIES</span><h2>Explore the implementation</h2></div>
      <div className="project-gallery">{featured.map(project => {
        const metadata = repoMetadata[githubProjects.find(repo => repo.detailSlug === project.slug)?.repo]
        const Icon = project.categories.includes('Cloud & AWS') ? Cloud : project.categories.includes('AI & RAG') ? Braces : Container
        return <Link className="gallery-card" to={`/projects/${project.slug}`} key={project.slug}>
          <div className="gallery-art"><Icon/><span>{project.type}</span></div>
          <div className="gallery-body"><span className="project-number">{project.number} / CASE STUDY</span><h2>{project.name}</h2><p>{metadata?.description || project.description}</p>
            <div className="tag-list">{project.stack.slice(0,5).map(tag => <span className="tag" key={tag}>{tag}</span>)}{metadata?.language && <span className="tag">{metadata.language}</span>}</div>
            <span className="text-link">View technical case study <ArrowUpRight size={15}/></span>
          </div>
        </Link>
      })}</div>
    </section>}
    {repositories.length > 0 && <section className="project-list-section repository-section"><div className="project-list-heading"><span className="eyebrow">MORE PUBLIC REPOSITORIES</span><h2>Labs, notes & experiments</h2></div>
      <div className="repository-grid">{repositories.map((repository,i) => {
        const metadata = repoMetadata[repository.repo]
        const Icon = repository.categories.includes('Cloud & AWS') ? Cloud : repository.categories.includes('DevOps') ? FlaskConical : BookOpen
        return <article className="repository-card" key={repository.repo}>
          <a className="repository-image" href={repository.github} target="_blank" rel="noreferrer" aria-label={`Open ${repository.name} on GitHub`}>
            {repository.image ? <img src={repository.image} alt="" loading="lazy" onError={event => { event.currentTarget.style.display = 'none' }}/> : <Icon/>}
            <span>{repository.repo}</span>
          </a>
          <div className="repository-body"><div className="repository-meta"><span>{repository.categories.join(' · ')}</span>{metadata?.language && <span>{metadata.language}</span>}</div><h3>{metadata?.name || repository.name}</h3><p>{metadata?.description || repository.description}</p>
            <div className="tag-list">{repository.technologies.map(technology => <span className="tag" key={technology}>{technology}</span>)}</div>
            <a className="text-link" href={repository.github} target="_blank" rel="noreferrer">View repository <Github size={14}/></a>
          </div>
        </article>
      })}</div>
    </section>}
    {featured.length === 0 && repositories.length === 0 && <div className="empty-state"><h2>No repositories match this filter.</h2><p>Select another category to view projects.</p></div>}
  </div>
}
