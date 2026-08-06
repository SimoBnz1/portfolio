import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0F17]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            MBI<span className="text-purple-500">.dev</span>
          </a>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-purple-400 transition-colors">Profil</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Compétences</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projets</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <a 
              href="/CV_Mohamed_BENIZZA.pdf" 
              download="CV_Mohamed_BENIZZA.pdf"
              className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all shadow-lg shadow-purple-900/40"
            >
              Télécharger CV
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-gray-800 px-4 pt-2 pb-4 space-y-2 text-gray-300">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-purple-400">Profil</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block py-2 hover:text-purple-400">Compétences</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block py-2 hover:text-purple-400">Projets</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-purple-400">Contact</a>
          <a 
            href="/CV_Mohamed_BENIZZA.pdf" 
            download="CV_Mohamed_BENIZZA.pdf"
            className="block text-center mt-2 px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg"
          >
            Télécharger CV
          </a>
        </div>
      )}
    </nav>
  );
}