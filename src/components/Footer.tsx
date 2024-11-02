import { Monitor, Github, Twitter, Linkedin, Mail, MapPin, Phone, FileText, BookOpen, Newspaper, Users, Building, Code, Cloud, Shield, Cpu } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: {
      title: 'Services',
      links: [
        { icon: Code, text: 'Custom Software Development' },
        { icon: Cloud, text: 'Cloud Solutions' },
        { icon: Shield, text: 'Cybersecurity Services' },
        { icon: Cpu, text: 'AI & Machine Learning' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { icon: Building, text: 'About Us' },
        { icon: Users, text: 'Careers' },
        { icon: FileText, text: 'Legal' },
        { icon: Newspaper, text: 'Press Kit' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { icon: BookOpen, text: 'Documentation' },
        { icon: Users, text: 'Community' },
        { icon: FileText, text: 'Case Studies' },
        { icon: Newspaper, text: 'Blog' }
      ]
    }
  };

  const contactInfo = [
    { icon: Mail, text: 'contact@neontech.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: 'San Francisco, CA' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' }
  ];

  return (
    <footer className="relative z-10 bg-black/80 backdrop-blur-lg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Monitor className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                NeonTech
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses with cutting-edge technology solutions. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-gray-500 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {label}
                  </span>
                </a>
              ))}
            </div>
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center space-x-3 text-sm text-gray-400">
                  <Icon className="w-4 h-4 text-blue-500" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map(({ icon: Icon, text }) => (
                  <li key={text}>
                    <button className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
                      <Icon className="w-4 h-4 text-blue-500 group-hover:text-blue-400 transition-colors duration-200" />
                      <span className="text-sm">{text}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} NeonTech. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 md:justify-end text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-200">Privacy Policy</button>
              <button className="hover:text-white transition-colors duration-200">Terms of Service</button>
              <button className="hover:text-white transition-colors duration-200">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}