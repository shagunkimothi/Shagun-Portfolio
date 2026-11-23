import { useState } from 'react'
import { Terminal as TerminalIcon } from 'lucide-react'
import { profile, skills, projects, experience, certifications } from '../data/profile'

const help = 'Available commands: help, about, skills, projects, experience, education, certifications, resume, contact, clear'
function response(command) {
  switch(command.toLowerCase()) {
    case 'help': return help
    case 'about': return `I'm ${profile.name}, a Computer Science student exploring cloud engineering, full-stack development, and DevOps.`
    case 'skills': return Object.entries(skills).map(([k,v])=>`${k}: ${v.join(', ')}`).join('\\n')
    case 'projects': return projects.map(p=>`${p.number}. ${p.name} — ${p.github}`).join('\\n')
    case 'experience': return experience.map(e=>`${e.role} @ ${e.company} (${e.date})`).join('\\n')
    case 'education': return 'B.Tech CSE — Cloud Computing & Virtualization, UPES (2023–2027), CGPA 7.20/10.'
    case 'certifications': return certifications.join('\\n')
    case 'resume': return `Resume: ${profile.resume} (add the PDF to the public folder)`
    case 'contact': return `${profile.email} · ${profile.phone} · ${profile.location}`
    default: return `Command not found: ${command}. Type "help" to see available commands.`
  }
}
export default function TerminalSection() {
  const [command,setCommand] = useState('')
  const [history,setHistory] = useState([{cmd:'welcome',out:'Welcome to shagun://terminal. Type "help" to explore.'}])
  const submit = e => {e.preventDefault();const cmd=command.trim();if(!cmd)return;if(cmd==='clear'){setHistory([]);setCommand('');return;}setHistory([...history,{cmd,out:response(cmd)}]);setCommand('')}
  return <section className="section terminal-section"><div className="container terminal-wrap"><div className="terminal-intro"><span className="eyebrow">A LITTLE INTERACTIVE CORNER</span><h2>Prefer the command line?</h2><p>Explore a few details about me with a tiny, safe, simulated terminal.</p></div><div className="terminal"><div className="terminal-bar"><div className="window-dots"><i/><i/><i/></div><span><TerminalIcon size={14}/> shagun@portfolio ~</span><span className="terminal-live">● LOCAL SIMULATION</span></div><div className="terminal-body">{history.map((item,i)=><div className="terminal-entry" key={i}><p><b>visitor@shagun:~$</b> {item.cmd}</p><pre>{item.out}</pre></div>)}<form onSubmit={submit} className="terminal-form"><label htmlFor="terminal-command">visitor@shagun:~$</label><input id="terminal-command" value={command} onChange={e=>setCommand(e.target.value)} autoComplete="off" spellCheck="false" aria-label="Terminal command"/><span className="cursor">▍</span></form></div></div><p className="terminal-footnote">This is a safe portfolio interface, not a real system shell. It does not execute operating-system commands.</p></div></section>
}
