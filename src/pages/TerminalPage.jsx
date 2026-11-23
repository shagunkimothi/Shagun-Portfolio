import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { profile, skills, projects, experience, certifications } from '../data/profile'

const commands = ['help','about','skills','projects','experience','education','certifications','resume','contact','clear']
function response(command) {
  switch(command) {
    case 'help': return `Available commands: ${commands.join(', ')}`
    case 'about': return `I'm ${profile.name}, a Cloud & Full-Stack Developer.`
    case 'skills': return Object.entries(skills).map(([k,v])=>`${k}: ${v.join(', ')}`).join('\n')
    case 'projects': return projects.map(p=>`${p.number}. ${p.name}`).join('\n')
    case 'experience': return experience.map(e=>`${e.role} @ ${e.company} (${e.date})`).join('\n')
    case 'education': return 'B.Tech CSE — Cloud Computing & Virtualization, UPES (2023–2027), CGPA 7.20/10.'
    case 'certifications': return certifications.join('\n')
    case 'resume': return `Resume: ${profile.resume}`
    case 'contact': return `${profile.email} · ${profile.phone} · ${profile.location}`
    default: return `Command not found: ${command}\nType "help" to see available commands.`
  }
}
export default function TerminalPage() {
  const [command,setCommand]=useState('')
  const [history,setHistory]=useState([{cmd:'welcome',out:'Portfolio terminal ready. Type "help" to begin.'}])
  const submit=e=>{e.preventDefault();const cmd=command.trim().toLowerCase();if(!cmd)return;if(cmd==='clear'){setHistory([])}else{setHistory([...history,{cmd,out:response(cmd)}])}setCommand('')}
  return <div className="page terminal-page" id="top">
    <PageHeader index="07" eyebrow="DEVELOPER TERMINAL" title="Explore by command." description="A safe, simulated terminal for quick information about my portfolio." />
    <div className="terminal-window"><div className="terminal-bar"><span className="window-dots"><i/><i/><i/></span><span>visitor@shagun ~</span><span>LOCAL SIMULATION</span></div><div className="terminal-body">{history.map((item,i)=><div key={i}><p><b>visitor@shagun:~$</b> {item.cmd}</p><pre>{item.out}</pre></div>)}<form onSubmit={submit}><label htmlFor="command">visitor@shagun:~$</label><input id="command" value={command} onChange={e=>setCommand(e.target.value)} autoComplete="off" spellCheck="false" aria-label="Terminal command"/><span className="cursor">▍</span></form></div></div><p className="simulation-note">This interface does not execute system commands or accept arbitrary shell operations.</p>
  </div>
}
