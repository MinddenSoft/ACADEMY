import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ModuleDetailPage from './pages/ModuleDetailPage'
import SectionDetailPage from './pages/SectionDetailPage'
import FinalProjectPage from './pages/FinalProjectPage'

function RedirectHandler() {
  const navigate = useNavigate()
  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect')
    if (redirect) {
      sessionStorage.removeItem('redirect')
      const base = import.meta.env.BASE_URL
      const relative = redirect.replace(base, '').replace(/\/$/, '')
      if (relative) navigate(relative, { replace: true })
    }
  }, [navigate])
  return null
}

function ScrollToHash() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [hash])
  return null
}

function App() {
  return (
    <ThemeProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <RedirectHandler />
        <ScrollToHash />
        <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/modulo/:slug" element={<ModuleDetailPage />} />
            <Route path="/modulo/:slug/:sectionIndex" element={<SectionDetailPage />} />
            <Route path="/proyecto-final" element={<FinalProjectPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
