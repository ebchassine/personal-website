import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Folder, User } from 'react-feather';

const menuItems = [
  { name: 'Home', icon: Home, path: '/' },
  { name: 'Projects', icon: Folder, path: '/projects' },
  { name: 'About', icon: User, path: '/about' },
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-background text-text h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">
            Ethan<br></br>
            Wong-Chassine
        </h1>
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 p-2 rounded transition-colors ${
                    location.pathname === item.path
                      ? 'bg-text text-background'
                      : 'hover:bg-text hover:bg-opacity-10'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-auto p-6">
        {/* <p className="text-sm">&copy; 2023 Your Name</p> */}
      </div>
    </aside>
  );
}

export default Sidebar;