import React, { useState, useEffect } from 'react';
import { Download, Phone, Mail, ChevronUp, Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import Skillset from './Skillset';
import Projects from './Projects';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  const experiences = [
    { 
      role: 'Full Stack Developer', 
      year: '2024-Present', 
      company: 'Hexaware Technology', 
      description: 'Developing and maintaining web applications using .NET and React.' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main content wrapper - Added padding-left for desktop */}
      <div className="md:pl-64 transition-all duration-300">
        {/* Hero Section */}
        <section id="home" id1="home2"className="min-h-screen pt-20 relative overflow-hidden bg-gray-900 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between relative z-20">
            {/* Hero content remains the same */}
            <div className="w-full md:w-1/2 pt-8 md:pt-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
                I AM <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">SUCHINTAN ROY</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                FULLSTACK DEVELOPER
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Crafting visually stunning designs and creative solutions for brands and businesses. Let's bring your vision to life.
              </p>
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
            
            {/* Profile Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20 blur-2xl" />
                <img
                  src="images/Roy.png"
                  alt="Profile"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-orange-500"
                />
              </div>
            </div>
          </div>
        </section>
 {/* Skills Section */}
        <Skillset />

        {/* Projects Section */}
       <Projects/>
        
    {/* Experience Section */}
    <section id="experience" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-white font-bold text-center mb-8">Experience</h2>
            <div className="space-y-4">
              {experiences.map(({ role, year, company, description }) => (
                <div key={year} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl text-yellow-400 font-semibold mb-2">{role} - {year}</h3>
                  <h4 className="text-gray-300 mb-2">{company}</h4>
                  <p className="text-gray-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-white font-bold text-center mb-8">Contact Me</h2>
            <div className="bg-gray-800 max-w-2xl mx-auto p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <p className="text-gray-300 text-lg mb-6">
                  Let's work together!
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a 
                    href="tel:+123456789" 
                    className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 8825924958</span>
                  </a>
                  <a 
                    href="mailto:example@example.com" 
                    className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>suchintanroy123@gmail.com</span>
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="py-12 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-400 mb-4">Follow me on social media</p>
              <div className="flex justify-center space-x-6">
                {/* Add your social media links here */}
                <a href="https://www.linkedin.com/in/suchintan-roy-605179253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/suchintanroy" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  GitHub
                </a>
                <a href="https://x.com/SuchintanR?t=PgwlQGS6EEgbwWGE7A03Fg&s=08" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} Suchintan Roy. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 bg-yellow-400 p-3 rounded-full hover:bg-yellow-500 transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-gray-900" />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;