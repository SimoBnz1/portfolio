import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white mb-2">Compétences Techniques</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((cat, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-[#0B0F17]/60 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all group"
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-4 group-hover:text-purple-300">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800/80 rounded-md border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}