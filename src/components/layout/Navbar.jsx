import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav 
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="text-primary-900 font-bold text-2xl">
          المجد هوم
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className="nav-link text-gray-800 hover:text-primary-800">
            الرئيسية
          </NavLink>
          <NavLink to="/catalog" className="nav-link text-gray-800 hover:text-primary-800">
            الكتالوج
          </NavLink>
          <NavLink to="/gallery" className="nav-link text-gray-800 hover:text-primary-800">
            المعرض
          </NavLink>
          <NavLink to="/contact" className="nav-link text-gray-800 hover:text-primary-800">
            تواصل معنا
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button 
          className="p-2 text-gray-700 md:hidden"
          onClick={toggleMobileMenu}
          aria-label="القائمة"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 shadow-md py-4 px-4 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className="text-gray-800 py-2 hover:text-primary-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              الرئيسية
            </NavLink>
            <NavLink 
              to="/catalog" 
              className="text-gray-800 py-2 hover:text-primary-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              الكتالوج
            </NavLink>
            <NavLink 
              to="/gallery" 
              className="text-gray-800 py-2 hover:text-primary-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              المعرض
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-gray-800 py-2 hover:text-primary-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              تواصل معنا
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}