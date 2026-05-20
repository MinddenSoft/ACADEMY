import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FlaskConical, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/#objetivos', label: 'Objetivos' },
    { href: '/#temario', label: 'Temario' },
    { href: '/proyecto-final', label: 'Proyecto Final' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-dark-900/95 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-neutral-100 dark:border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2.5">
            <a href="/ACADEMY/">
              <svg viewBox="0 0 828 487" className={`h-7 w-auto transition-colors ${scrolled ? 'text-primary-900' : 'text-white'} dark:text-white`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M244.066 216V172.877C244.066 152.727 235.094 144.092 220.492 144.092C206.366 144.092 196.059 152.631 196.059 172.877V224.689H184.033V172.493C184.033 152.535 173.63 144.188 159.982 144.188C144.997 144.188 136.026 154.646 136.026 172.493V224.689H124V135.265H136.026V145.531C142.897 136.512 149.865 133.058 161.127 133.058C174.489 133.058 183.269 138.335 190.237 150.233C197.681 138.335 207.321 132.866 221.16 132.866C241.489 132.866 256.187 145.435 256.187 171.437V224.593H244.066V216Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M277.146 119.271C277.146 122.42 279.699 124.973 282.848 124.973C285.997 124.973 288.55 122.42 288.55 119.271C288.55 116.122 285.997 113.569 282.848 113.569C279.699 113.569 277.146 116.122 277.146 119.271ZM276.611 135.265V224.689H288.637V135.265H276.611Z"/>
              <path d="M375.871 224.689V177.77C375.871 153.399 364.8 144.284 348.384 144.284C332.254 144.284 321.183 153.591 321.183 175.563V224.785H309.157V135.361H321.183V146.97C328.627 137.855 338.076 133.25 349.815 133.25C372.149 133.25 387.897 146.491 387.897 177.866V224.785H375.871V224.689Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M499.278 103.793H487.252V149.465C478.471 138.815 466.255 133.154 452.225 133.154C425.406 133.154 404.886 153.399 404.886 180.073C404.886 206.555 425.883 226.896 453.37 226.896C468.164 226.896 478.281 221.523 487.252 208.57V217.877V270.745C478.471 260.094 466.255 254.433 452.32 254.433C425.501 254.433 404.981 274.679 404.981 301.352C404.981 327.834 425.978 348.175 453.466 348.175C468.259 348.175 478.376 342.802 487.347 329.849V346.065H499.373V224.689V103.793H499.278ZM453.084 215.67C432.755 215.67 417.102 199.934 417.102 179.497C417.102 159.828 432.564 144.188 451.939 144.188C471.6 144.188 487.729 160.019 487.729 179.689C487.729 199.358 472.172 215.67 453.084 215.67ZM417.102 300.681C417.102 321.118 432.755 336.854 453.084 336.854C472.172 336.854 487.729 320.542 487.729 300.873C487.729 281.203 471.6 265.372 451.939 265.372C432.564 265.372 417.102 281.011 417.102 300.681Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M562.842 336.949C544.613 336.949 529.151 322.845 528.197 305.19H608.749C608.749 273.431 588.707 254.337 562.365 254.337C536.5 254.337 516.171 274.774 516.171 300.777C516.171 327.259 536.882 348.079 563.224 348.079C583.362 348.079 600.732 333.495 606.459 316.512H593.956C588.898 328.794 576.299 336.949 562.842 336.949ZM528.483 294.156C531.728 276.981 545.281 265.371 562.174 265.371C579.449 265.371 592.62 276.406 596.629 294.156H528.483Z"/>
              <path d="M691.975 345.873V298.954C691.975 274.582 680.903 265.467 664.487 265.467C648.358 265.467 637.286 274.774 637.286 296.747V345.969H625.261V256.544H637.286V268.154C644.731 259.039 654.18 254.433 665.919 254.433C688.252 254.433 704 267.674 704 299.049V345.969H691.975V345.873Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M591.752 70.0639C553.905 76.2866 525 109.733 525 150.059C525 194.813 560.6 231.093 604.514 231.093C646.087 231.093 680.208 198.578 683.729 157.141C678.261 163.933 671.425 169.576 663.639 173.652C654.028 196.531 631.409 212.598 605.037 212.598C569.948 212.598 541.502 184.153 541.502 149.063C541.502 124.593 555.336 103.354 575.61 92.7396C579.273 84.0211 584.824 76.2919 591.752 70.0639Z"/>
              <path d="M634.546 70C630.178 70 625.906 70.5748 621.823 71.7243C615.842 73.4487 610.24 76.2267 605.398 80.0586C601.315 83.2198 597.707 87.1475 594.859 91.4583C592.296 95.2901 590.302 99.5052 588.973 103.912C587.643 108.318 586.884 113.108 586.884 117.994C586.884 144.529 608.246 166.083 634.546 166.083C639.198 166.083 643.66 165.413 647.838 164.167C651.92 162.922 655.813 161.198 659.421 158.994C664.168 156.025 668.346 152.289 671.858 147.882C675.466 143.38 678.22 138.207 679.929 132.555C681.353 127.957 682.207 123.071 682.207 117.994C682.112 91.5541 660.75 70 634.546 70Z"/>
            </svg></a>
            <Link to="/" className={`font-display font-bold text-lg transition-colors ${scrolled ? 'text-primary-900' : 'text-white'} dark:text-white`}>OfficeMind Academy</Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link key={link.href} to={link.href} className={`text-sm font-medium transition-colors relative group ${scrolled ? 'text-neutral-600 hover:text-accent-500' : 'text-white/90 hover:text-white'} dark:text-neutral-300 dark:hover:text-accent-400`}>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <ThemeToggle />
            <Link to="/#temario" className="px-5 py-2.5 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md">
              Ver Temario
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} className={`p-2 transition-colors ${scrolled ? 'text-neutral-700 hover:text-accent-600' : 'text-white/90 hover:text-white'} dark:text-neutral-300 dark:hover:text-accent-400`}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-neutral-100 dark:border-white/10 pt-4">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-accent-500/5 dark:hover:bg-accent-500/10 transition-colors font-medium">
                  {link.label}
                </Link>
              ))}
              <Link to="/#temario" onClick={() => setMobileOpen(false)} className="mx-4 mt-2 px-5 py-3 rounded-lg bg-primary-500 text-white text-center font-semibold hover:bg-primary-600 transition-colors">
                Ver Temario
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
