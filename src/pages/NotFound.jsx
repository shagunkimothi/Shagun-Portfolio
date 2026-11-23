import { Link } from 'react-router-dom'
export default function NotFound(){return <div className="page not-found" id="top"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>That route isn't in the workspace.</h1><p>The page may have moved or the URL may be incorrect.</p><Link className="button button-primary" to="/">Return home</Link></div>}
