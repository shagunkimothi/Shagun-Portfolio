import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { Play, CheckCircle2, Circle, RotateCcw } from 'lucide-react'

const architecture = [
  ['Cognito','Authenticates users and issues tokens for protected upload operations.'],
  ['API Gateway','Exposes the application API and coordinates the presigned upload request.'],
  ['S3','Stores the original uploaded image and emits an object-created event.'],
  ['SQS','Buffers image-processing work so the workflow can process asynchronously.'],
  ['Lambda','Runs image optimization and coordinates analysis and persistence.'],
  ['Rekognition','Detects visual labels in the uploaded image.'],
  ['Bedrock','Generates a natural-language image description using a foundation model.'],
  ['DynamoDB','Stores image metadata and analysis results for later retrieval.']
]
const stages = ['Git push','Jenkins trigger','Repository checkout','Docker image build','Registry authentication','Image push']
export default function Lab() {
  const [active, setActive] = useState(0)
  const [running, setRunning] = useState(false)
  const [completed, setCompleted] = useState(false)
  const selected = architecture[active]
  const run = () => { setRunning(true); setCompleted(false); let i=0; const tick=()=>{ i++; setActive(Math.min(i-1, stages.length-1)); if(i>=stages.length){setRunning(false);setCompleted(true);return;} window.setTimeout(tick,650) }; window.setTimeout(tick,300) }
  const reset = () => {setRunning(false);setCompleted(false);setActive(0)}
  return <section id="lab" className="section section-alt"><div className="container">
    <SectionTitle eyebrow="05 / UNDER THE HOOD" title="Explore my engineering lab" description="Small interactive explainers for the systems and workflows behind my projects."/>
    <div className="lab-panel"><div className="lab-heading"><div><span className="eyebrow">01 — CLOUD ARCHITECTURE EXPLORER</span><h3>Follow the image through the cloud.</h3></div><span className="lab-chip">INTERACTIVE</span></div>
      <div className="architecture-layout"><div className="architecture-nodes">{architecture.map(([name], i) => <button key={name} className={`architecture-node ${active===i?'active':''}`} onClick={()=>setActive(i)}><span className="node-index">0{i+1}</span>{name}</button>)}</div><div className="architecture-detail"><span className="eyebrow">SERVICE / 0{active+1}</span><h4>{selected[0]}</h4><p>{selected[1]}</p><div className="detail-nav"><button onClick={()=>setActive((active+architecture.length-1)%architecture.length)}>Previous</button><button onClick={()=>setActive((active+1)%architecture.length)}>Next service →</button></div></div></div>
      <p className="diagram-note">Conceptual flow: authenticated upload → S3 event → SQS queue → Lambda processing → AI analysis and metadata storage. The diagram is an explanatory model, not a live AWS connection.</p>
    </div>
    <div className="lab-bottom-grid"><div className="lab-panel"><span className="eyebrow">02 — RAG PIPELINE</span><h3>From question to contextual answer.</h3><div className="rag-flow">{['User query','Embedding','Semantic retrieval','Context assembly','Gemini response'].map((s,i)=><div className="rag-step" key={s}><span>0{i+1}</span>{s}{i<4&&<b>→</b>}</div>)}</div><p className="diagram-note">A simplified retrieval-augmented generation flow: retrieve relevant context before generating a response.</p></div>
      <div className="lab-panel"><span className="eyebrow">03 — CI/CD SIMULATOR</span><h3>Run a sample pipeline.</h3><p className="sim-desc">A frontend-only simulation of the stages in my Jenkins and Docker demo.</p><div className="pipeline-list">{stages.map((s,i)=><div className={`pipeline-stage ${active===i && running?'current':''} ${completed || (running && i<active)?'done':''}`} key={s}>{completed || (running && i<active)?<CheckCircle2 size={16}/>:<Circle size={16}/>}<span>{s}</span></div>)}</div><div className="sim-actions"><button className="button button-primary" onClick={run} disabled={running}><Play size={15}/>{running?'Running…':'Run simulation'}</button><button className="reset-button" onClick={reset}><RotateCcw size={15}/> Reset</button></div>{completed&&<p className="success-note">Simulation complete — all demo stages passed.</p>}<p className="diagram-note">Simulation only. No Jenkins server, registry, or deployment is contacted.</p></div></div>
  </div></section>
}
