import { useState } from 'react'
import { Mail, MapPin, Phone, Github, Linkedin, Award, Send } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { profile } from '../data/profile'

export default function Contact() {
  const endpoint=import.meta.env.VITE_FORMSPREE_ENDPOINT
  const [status,setStatus]=useState('')
  const [sending,setSending]=useState(false)
  async function submit(e){e.preventDefault();if(!endpoint){setStatus('The contact form is not configured. Please email me directly.');return}setSending(true);setStatus('');const form=e.currentTarget;try{const r=await fetch(endpoint,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});if(!r.ok)throw new Error();setStatus('Your message was submitted successfully.');form.reset()}catch{setStatus('The message could not be submitted. Please email me directly.')}finally{setSending(false)}}
  return <div className="page" id="top">
    <PageHeader index="09" eyebrow="CONTACT" title="Let's start a conversation." description="For roles, collaborations, and interesting engineering problems." />
    <div className="contact-layout"><aside className="contact-details"><a href={`mailto:${profile.email}`}><Mail/><span>Email<strong>{profile.email}</strong></span></a><div><Phone/><span>Phone<strong>{profile.phone}</strong></span></div><div><MapPin/><span>Location<strong>{profile.location}</strong></span></div><div className="contact-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>{profile.linkedin&&<a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>}<a href={profile.credly} target="_blank" rel="noreferrer" aria-label="Credly"><Award/></a></div></aside>
      <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Name<input name="name" required placeholder="Your name"/></label><label>Email<input name="email" type="email" required placeholder="you@example.com"/></label></div><label>Subject<input name="subject" required placeholder="What would you like to discuss?"/></label><label>Message<textarea name="message" required rows="7" placeholder="Tell me a little about the opportunity or project…"/></label><button className="button button-primary" type="submit" disabled={sending}><Send size={15}/>{sending?'Sending…':'Send message'}</button>{status&&<p className="form-status" role="status">{status}</p>} {!endpoint&&<p className="form-notice">Configuration notice: set <code>VITE_FORMSPREE_ENDPOINT</code> to enable submission.</p>}</form>
    </div>
  </div>
}
