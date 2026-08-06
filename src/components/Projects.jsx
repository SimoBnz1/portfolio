import React from 'react';
import { projectsData } from '../data/portfolioData';

const projectImages = {
  "PRJ-001": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80", // LinkUp
  "PRJ-002": "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80", // Sport-Quiz
  "PRJ-003": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", // Creator-Hub
  "PRJ-004": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80", // E-Attestation
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0B0F17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white mb-2">Projets Réalisés</h2>
          <p className="text-gray-400 text-sm">Découvrez mes applications et réalisations techniques</p>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                project.featured 
                  ? 'bg-gradient-to-b from-purple-950/20 to-[#0F172A] border-purple-500/40 hover:border-purple-500' 
                  : 'bg-[#0F172A]/80 border-gray-800 hover:border-gray-700'
              }`}
            >
              <div>
                {/* صورة المشروع مع إفكت زوم خفيف عند التمرير */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                  <img 
                    src={projectImages[project.id] || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
                  
                  {project.featured && (
                    <span className="absolute top-3 right-3 px-3 py-1 text-xs font-bold text-purple-300 bg-purple-950/80 border border-purple-700/60 rounded-full backdrop-blur-md">
                      Projet Principal
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs font-semibold text-purple-400 mb-3">{project.tagline}</p>
                  
                  {/* وصف مختصر جداً بدلاً من الفقرات الطويلة */}
                  <p className="text-gray-300 text-sm leading-snug mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* التقنيات المستعملة */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 text-[11px] font-medium text-gray-400 bg-gray-900/90 border border-gray-800 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                {project.githubUrl ? (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 transition-transform"
                  >
                    Voir le code sur GitHub &rarr;
                  </a>
                ) : (
                  <span className="text-xs text-gray-500 italic">Code source institutionnel</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}