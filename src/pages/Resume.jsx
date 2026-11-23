import { useEffect, useState } from 'react'
import { Download, ExternalLink, FileText, Mail, Printer } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { profile } from '../data/profile'

export default function Resume() {
  const [pdfState, setPdfState] = useState('checking')
  const [printMessage, setPrintMessage] = useState('')

  useEffect(() => {
    let active = true
    fetch(profile.resume, { method: 'HEAD', cache: 'no-store' })
      .then(response => {
        const isPdf = response.ok && response.headers.get('content-type')?.toLowerCase().includes('application/pdf')
        if (active) setPdfState(isPdf ? 'ready' : 'missing')
      })
      .catch(() => {
        if (active) setPdfState('missing')
      })
    return () => { active = false }
  }, [])

  function printResume() {
    const printWindow = window.open(profile.resume, '_blank')
    if (!printWindow) {
      setPrintMessage('Your browser blocked the PDF window. Allow pop-ups to print the resume.')
      return
    }
    printWindow.opener = null
    setPrintMessage('The PDF was opened in a new tab. If printing does not start automatically, use its print control.')
    printWindow.addEventListener('load', () => {
      try {
        printWindow.focus()
        printWindow.print()
      } catch {
        setPrintMessage('The PDF is open in a new tab. Use the browser PDF viewer’s print control.')
      }
    }, { once: true })
  }

  const hasPdf = pdfState === 'ready'
  return <div className="page resume-page" id="top">
    <PageHeader index="08" eyebrow="RESUME" title="Resume & professional profile" description="Review or download my resume, or get in touch about a role or collaboration." actions={
      <><a className={`button button-primary ${!hasPdf ? 'button-disabled' : ''}`} href={hasPdf ? profile.resume : undefined} download="shagun_kimothi_resumefinal (2).pdf" aria-disabled={!hasPdf}><Download size={16}/> Download PDF</a>
        <button className="button button-ghost" onClick={printResume} disabled={!hasPdf}><Printer size={16}/> Print</button></>
    } />
    <div className="resume-layout">
      <aside className="resume-summary">
        <div className="resume-summary-icon"><FileText size={20}/></div>
        <span className="eyebrow">PROFESSIONAL SUMMARY</span>
        <h2>{profile.name}</h2>
        <p className="resume-headline">{profile.headline}</p>
        <div className="summary-rule"/>
        <p>Computer Science Engineering student focused on cloud computing, full-stack development, DevOps, and practical AI integrations. I enjoy learning by building useful software and understanding the systems behind it.</p>
        <Link className="text-link" to="/contact"><Mail size={15}/> Contact me</Link>
      </aside>
      <section className="resume-document" aria-label="Resume PDF preview">
        {pdfState === 'checking' && <div className="resume-state"><span className="resume-spinner"/><p>Checking the resume PDF…</p></div>}
        {pdfState === 'missing' && <div className="resume-state resume-missing"><FileText size={28}/><h2>Resume PDF is not available yet. Please check back soon.</h2><p>The preview could not load <code>public/shagun_kimothi_resumefinal (2).pdf</code>.</p></div>}
        {hasPdf && <iframe src={`${profile.resume}#view=FitH`} title="Shagun Kimothi resume PDF" />}
      </section>
    </div>
    {printMessage && <p className="resume-print-status" role="status">{printMessage}</p>}
  </div>
}
