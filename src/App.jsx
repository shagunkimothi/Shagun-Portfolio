import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Lab from './pages/Lab'
import Skills from './pages/Skills'
import Certifications from './pages/Certifications'
import TerminalPage from './pages/TerminalPage'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="projects/containerized-flask-cicd" element={<Navigate to="/projects/jenkins-cicd" replace />} />
        <Route path="lab" element={<Lab />} />
        <Route path="skills" element={<Skills />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="credentials" element={<Navigate to="/certifications" replace />} />
        <Route path="terminal" element={<TerminalPage />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
}
