import React, { useState } from 'react';
import { Home, Folder, Image, Linkedin, GitHub, Mail } from 'react-feather';

const iconMap = {
  'about': Home,
  'projects': Folder,
  'gallery': Image,
};

function Sidebar({ sections, activeSection, onSectionClick }) {
    // Used in lower part of sidebar
    const [emailCopied, setEmailCopied] = useState(false);
    const handleEmailCopy = () => {
        navigator.clipboard.writeText('ebchassine@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000); // Hide message after 2 seconds
      };
    
  return (
    <aside className="w-64 bg-background text-text h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">Ethan Wong-Chassine</h1>
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
       {/* Social icons section */}
       <div className="mt-auto p-6">
        <div className="flex space-x-4 mb-4">
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/ethan-wong-chassine-1530b1270/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} className="hover:text-linkedin-color" />
          </a>
          {/* GitHub Icon */}
          <a href="https://github.com/ebchassine" target="_blank" rel="noopener noreferrer">
            <GitHub size={20} className="hover:text-github-color" />
          </a>
          {/* Gmail Icon */}
          <button onClick={handleEmailCopy} className="focus:outline-none">
            <Mail size={20} className="hover:text-gmail-color" />
          </button>
        </div>
        {/* Notification message */}
        {emailCopied && <p className="text-sm text-green-500">Email copied to clipboard!</p>}
        
        {/* <p className="text-sm">&copy; 2023 Your Name</p> */}
      </div>
    </aside>
  );
}

export default Sidebar;