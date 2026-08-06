import React from 'react';
import { profileData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0F172A] text-white border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Travaillons ensemble</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Je suis actuellement à la recherche d'une opportunité en CDI ({profileData.opportunity}). N'hésitez pas à me contacter !
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <a 
            href={`mailto:${profileData.email}`} 
            className="p-4 bg-[#0B0F17] border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all"
          >
            <div className="text-xs text-gray-500 mb-1">Email</div>
            <div className="text-sm font-medium text-purple-400 truncate">{profileData.email}</div>
          </a>

          <a 
            href={profileData.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-[#0B0F17] border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all"
          >
            <div className="text-xs text-gray-500 mb-1">LinkedIn</div>
            <div className="text-sm font-medium text-purple-400">mohamed-ben-izza</div>
          </a>

          <div className="p-4 bg-[#0B0F17] border border-gray-800 rounded-xl">
            <div className="text-xs text-gray-500 mb-1">Téléphone</div>
            <div className="text-sm font-medium text-gray-300">{profileData.phone}</div>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} {profileData.firstName} {profileData.lastName}. Tous droits réservés.
        </p>
      </div>
    </section>
  );
}