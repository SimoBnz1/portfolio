import React from 'react';
import { profileData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#0B0F17] text-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 text-center z-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-400 bg-purple-950/60 border border-purple-800/50 rounded-full mb-6">
          {profileData.opportunity}
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
          Bonjour, je suis <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">{profileData.firstName} {profileData.lastName}</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl text-gray-400 font-medium mb-6">
          {profileData.jobTitle}
        </h2>
        
        <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed mb-8">
          {profileData.bio}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="px-6 py-3 font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg shadow-purple-900/50 transition-all"
          >
            Voir mes projets
          </a>
          <a 
            href={profileData.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 font-semibold text-gray-300 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 rounded-lg transition-all"
          >
            GitHub
          </a>
          <a 
            href={profileData.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 font-semibold text-gray-300 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 rounded-lg transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}