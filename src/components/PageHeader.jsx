export default function PageHeader({ index, eyebrow, title, description, actions }) {
  return <header className="page-header"><div><span className="eyebrow">{index} / {eyebrow}</span><h1>{title}</h1>{description && <p>{description}</p>}</div>{actions && <div className="page-actions">{actions}</div>}</header>
}
