import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ModuleDetailPage from './pages/ModuleDetailPage'
import SectionDetailPage from './pages/SectionDetailPage'
import FinalProjectPage from './pages/FinalProjectPage'

const BASENAME = '/ACADEMY/office-ia-academy'
function getBasename() { return BASENAME }

function RedirectHandler() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname.endsWith('index.html')) {
      navigate(pathname.replace(/\/?index\.html$/, '') || '/', { replace: true })
      return
    }
    const redirect = sessionStorage.getItem('redirect')
    if (redirect) {
      sessionStorage.removeItem('redirect')
      const base = getBasename()
      const relative = redirect.replace(base, '').replace(/\/$/, '')
      if (relative) navigate(relative, { replace: true })
    }
  }, [navigate, pathname])
  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
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
      <Router basename={getBasename()}>
        <RedirectHandler />
        <ScrollToTop />
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
