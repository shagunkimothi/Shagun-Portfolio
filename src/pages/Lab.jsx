import { useEffect, useState } from 'react'
import { Play, RotateCcw, Check, Circle } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const architecture = [
 ['Cognito','Authenticates users and issues tokens for protected upload operations.'],
 ['API Gateway','Exposes the application API and coordinates the presigned upload request.'],
 ['S3','Stores the uploaded image and emits an object-created event.'],
 ['SQS','Buffers image-processing work for asynchronous handling.'],
 ['Lambda','Runs optimization and coordinates AI and metadata work.'],
 ['Rekognition','Detects visual labels in the uploaded image.'],
 ['Bedrock','Generates a natural-language image description.'],
 ['DynamoDB','Stores image metadata and analysis results.'],
]
const rag = ['Query','Embeddings','Retrieval','Context assembly','Gemini response']
const stages = ['Git push','Jenkins trigger','Repository checkout','Docker build','Registry authentication','Image push']

export default function Lab() {
  const [tab,setTab] = useState('Cloud Architecture')
  const [active,setActive] = useState(0)
  const [running,setRunning] = useState(false)
  const [progress,setProgress] = useState(-1)
  useEffect(() => { if (!running) return; if (progress >= stages.length) { setRunning(false); return } const timer=setTimeout(()=>setProgress(v=>v+1),550); return ()=>clearTimeout(timer)},[running,progress])
  const run=()=>{setProgress(0);setRunning(true)}
  return <div className="page" id="top">
    <PageHeader index="06" eyebrow="ENGINEERING LAB" title="A playground for engineering concepts." description="Interactive frontend simulations that explain architecture and automation patterns." />
    <div className="lab-tabs" role="tablist">{['Cloud Architecture','RAG Explorer','CI/CD Simulator'].map(name => <button role="tab" aria-selected={tab===name} className={tab===name?'active':''} onClick={()=>setTab(name)} key={name}>{name}</button>)}</div>
    {tab === 'Cloud Architecture' && <section className="lab-panel"><div className="lab-panel-heading"><div><span className="eyebrow">SERVERLESS IMAGE WORKFLOW</span><h2>Explore the AWS architecture</h2></div><span className="lab-chip">FRONTEND MODEL</span></div><div className="architecture-layout"><div className="architecture-nodes">{architecture.map(([name],i)=><button key={name} className={active===i?'active':''} onClick={()=>setActive(i)}><span>{String(i+1).padStart(2,'0')}</span>{name}</button>)}</div><article className="architecture-detail"><span className="eyebrow">SELECTED SERVICE</span><h3>{architecture[active][0]}</h3><p>{architecture[active][1]}</p></article></div><p className="simulation-note">Image processing flow: Cognito → API Gateway → S3 → SQS → Lambda → Rekognition / Bedrock → DynamoDB. This is not a live AWS connection.</p></section>}
    {tab === 'RAG Explorer' && <section className="lab-panel"><div className="lab-panel-heading"><div><span className="eyebrow">RETRIEVAL-AUGMENTED GENERATION</span><h2>From query to contextual response</h2></div><span className="lab-chip">EXPLANATORY FLOW</span></div><div className="rag-flow">{rag.map((step,i)=><div className="rag-step" key={step}><span>{String(i+1).padStart(2,'0')}</span><strong>{step}</strong><p>{['Submit a natural-language question','Convert text into vector representations','Find semantically relevant context','Combine the query with retrieved context','Generate a grounded response with Gemini'][i]}</p></div>)}</div><p className="simulation-note">A visual simplification of the RAG pattern used in the Daily Code project. No AI service is contacted here.</p></section>}
    {tab === 'CI/CD Simulator' && <section className="lab-panel"><div className="lab-panel-heading"><div><span className="eyebrow">JENKINS + DOCKER WORKFLOW</span><h2>Run a sample pipeline</h2></div><span className="lab-chip">FRONTEND SIMULATION</span></div><div className="pipeline">{stages.map((stage,i)=><div className={`pipeline-stage ${progress>i?'done':''} ${progress===i&&running?'current':''}`} key={stage}>{progress>i?<Check/>:<Circle/>}<span>{String(i+1).padStart(2,'0')}</span><strong>{stage}</strong></div>)}</div><div className="sim-actions"><button className="button button-primary" onClick={run} disabled={running}><Play size={15}/>{running?'Running…':'Run simulation'}</button><button className="button button-ghost" onClick={()=>{setRunning(false);setProgress(-1)}}><RotateCcw size={15}/> Reset</button>{progress>=stages.length&&!running&&<span className="success-note">Simulation complete</span>}</div><p className="simulation-note">No Jenkins server, Docker registry, or deployment is contacted.</p></section>}
  </div>
}
