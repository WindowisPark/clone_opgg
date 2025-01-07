import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/champions', label: '챔피언 분석' },
    { path: '/gamemode', label: '게임 모드' },
    { path: '/ranking', label: '랭킹' },
    { path: '/community', label: '커뮤니티' }
  ];

  return (
    <nav className="w-full max-w-screen-lg mx-auto mb-8">
      <ul className="flex space-x-6 text-white/80">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`hover:text-white cursor-pointer transition-colors ${
                location.pathname === item.path ? 'text-white font-semibold' : ''
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;