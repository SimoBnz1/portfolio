import React from 'react';
import { profileData } from '../data/portfolioData';
import profileImg from '../profile.jpg'; // <--- 1. استورد الصورة هنا

export default function Hero() {
  return (
    <section id="about" className="min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#0B0F17] text-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 text-center z-10 flex flex-col items-center">
        
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse"></div>
          
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden p-1 bg-[#0B0F17] border-2 border-purple-500/50 shadow-2xl">
            <img 
              src={profileImg} // <--- 2. استخدم المتغير هنا بدلاً من "/profile.jpg"
              alt={`${profileData.firstName} ${profileData.lastName}`}
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="absolute bottom-1 right-1 flex items-center gap-1.5 px-3 py-1 bg-[#0F172A]/90 border border-green-500/40 rounded-full shadow-lg backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-green-400 tracking-wide uppercase">Open to work</span>
          </div>
        </div>

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
            className="px-6 py-3 font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg shadow-purple-900/50 transition-all hover:scale-105"
          >
            Voir mes projets
          </a>
          <a 
            href={profileData.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 font-semibold text-gray-300 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 rounded-lg transition-all hover:scale-105"
          >
            GitHub
          </a>
          <a 
            href={profileData.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 font-semibold text-gray-300 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 rounded-lg transition-all hover:scale-105"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}