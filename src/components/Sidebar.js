import React from 'react';
import { Home, Folder, Image } from 'react-feather';

const iconMap = {
  'about': Home,
  'projects': Folder,
  'gallery': Image,
};

function Sidebar({ sections, activeSection, onSectionClick }) {
  return (
    <aside className="w-64 bg-background text-text h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">Your Name</h1>
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
        <p className="text-sm">&copy; 2023 Your Name</p>
      </div>
    </aside>
  );
}

export default Sidebar;