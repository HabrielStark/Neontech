import { useState, useEffect } from 'react';
import { Monitor, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['services', 'about', 'case-studies', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Monitor className="w-8 h-8 text-blue-500 transform hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              NeonTech
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'services', label: 'Services' },
              { id: 'about', label: 'About' },
              { id: 'case-studies', label: 'Case Studies' },
              { id: 'blog', label: 'Blog' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group overflow-hidden`}
              >
                <span className="relative z-10">{label}</span>
                <span className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left 
                  ${activeSection === id ? 'scale-x-100' : 'scale-x-0'} 
                  group-hover:scale-x-100 transition-transform duration-300 opacity-10`}
                />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left 
                  group-hover:scale-x-100 scale-x-0 transition-transform duration-300"
                />
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { id: 'services', label: 'Services' },
              { id: 'about', label: 'About' },
              { id: 'case-studies', label: 'Case Studies' },
              { id: 'blog', label: 'Blog' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left px-4 py-3 text-gray-300 hover:text-white 
                  relative overflow-hidden group transition-colors duration-200
                  ${activeSection === id ? 'text-white bg-gray-800/50' : ''}`}
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
                  transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}