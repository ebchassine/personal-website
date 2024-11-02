import React, { useState, useEffect, useCallback } from 'react';
import { Home, Folder, Image, Linkedin, GitHub, Mail, BookOpen } from 'react-feather';

const iconMap = {
  'hero': Home,
  'about': BookOpen,
  'projects': Folder,
  'gallery': Image,
};

function Sidebar({ sections, activeSection, onSectionClick }) {
    const [emailCopied, setEmailCopied] = useState(false);
    
    useEffect(() => {
        console.log('Sidebar re-rendered with active section:', activeSection);
    }, [activeSection]);

    const handleEmailCopy = useCallback(() => {
        navigator.clipboard.writeText('ebchassine@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    }, []);
    
    return (
      <aside className="w-64 bg-background text-text h-screen flex flex-col">
        <div className="p-6">
          <nav>
            <ul className="space-y-4">
              {sections.map((section) => {
                const Icon = iconMap[section.id];
                return (
                  <li key={section.id}>
                    <button
                      onClick={() => onSectionClick(section.id)}
                      className={`flex items-center space-x-2 p-2 rounded transition-colors w-full text-left ${
                        activeSection === section.id
                          ? 'bg-text text-background'
                          : 'hover:bg-text hover:bg-opacity-10'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{section.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
    
       <div className="mt-auto p-6">
        <div className="flex space-x-4 mb-4">
          <a href="https://www.linkedin.com/in/ethan-wong-chassine-1530b1270/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} className="hover:text-linkedin-color" aria-label="LinkedIn" />
          </a>
          <a href="https://github.com/ebchassine" target="_blank" rel="noopener noreferrer">
            <GitHub size={20} className="hover:text-github-color" aria-label="GitHub" />
          </a>
          <button onClick={handleEmailCopy} className="focus:outline-none" aria-label="Copy Email">
            <Mail size={20} className="hover:text-gmail-color" />
          </button>
        </div>
        {emailCopied && <p className="text-sm text-green-500">Email copied to clipboard!</p>}
      </div>
    </aside>
  );
}

export default Sidebar;