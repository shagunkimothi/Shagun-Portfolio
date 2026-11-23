import { useState } from 'react'
import { profile } from '../data/profile'
import { Mail, MapPin, Phone, Github, Linkedin, Award, ArrowUpRight, Send } from 'lucide-react'

export default function Contact() {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
  const [status,setStatus] = useState('')
  const [sending,setSending] = useState(false)
  async function submit(e) {
    e.preventDefault()
    if (!endpoint) { setStatus('Contact form is not configured yet. Please email me directly.'); return }
    setSending(true); setStatus('')
    const form = e.currentTarget
    try {
      const response = await fetch(endpoint,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}})
      if (!response.ok) throw new Error('Request failed')
      setStatus('Thanks — your message was submitted.'); form.reset()
    } catch { setStatus('Something went wrong. Please email me directly instead.') }
    finally { setSending(false) }
  }
  return <section id="contact" className="section"><div className="container">
    <div className="contact-header"><div><span className="eyebrow">07 / YOUR TURN</span><h2>Have an idea?<br/><span>Let's make it real.</span></h2><p>Have a role, collaboration, or interesting problem in mind? I'd love to hear from you.</p></div><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight/></a></div>
    <div className="contact-grid"><div className="contact-info"><div><Mail/><span>{profile.email}</span></div><div><Phone/><span>{profile.phone}</span></div><div><MapPin/><span>{profile.location}</span></div><div className="contact-social"><a href={profile.github} target="_blank" rel="noreferrer"><Github/></a>{profile.linkedin&&<a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/></a>}<a href={profile.credly} target="_blank" rel="noreferrer"><Award/></a></div></div>
      <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Your name<input name="name" required placeholder="Jane Doe"/></label><label>Email address<input name="email" type="email" required placeholder="jane@example.com"/></label></div><label>Subject<input name="subject" required placeholder="What's on your mind?"/></label><label>Message<textarea name="message" rows="5" required placeholder="Tell me a little about it..."/></label><button className="button button-primary" type="submit" disabled={sending}><Send size={15}/>{sending?'Sending…':'Send message'}</button>{status&&<p className="form-status" role="status">{status}</p>}{!endpoint&&<p className="form-notice">Form endpoint not configured. Add <code>VITE_FORMSPREE_ENDPOINT</code> to your local <code>.env</code> file, or email me directly.</p>}</form>
    </div>
  </div></section>
}
