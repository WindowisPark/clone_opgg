import React, { useState } from 'react';
import { Search } from 'lucide-react';

const HeroSection = () => {
  const [region, setRegion] = useState('KR');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-[#5383E8] w-full min-h-screen">
      <div className="w-full px-4 py-4">
        {/* Logo Section */}
        <div className="flex justify-center items-center py-12">
          <img 
            src="/images/logo.png"
            alt="OP.GG Logo" 
            className="w-[500px]"
          />
        </div>

        {/* Search Section */}
        <div className="flex justify-center">
          <div className="flex w-[600px] bg-white rounded-md">
            <select 
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-28 p-3 bg-white rounded-l-md border-r border-gray-200"
            >
              <option value="KR">Korea</option>
              <option value="NA">North America</option>
              <option value="EUW">Europe West</option>
            </select>

            <div className="flex-1 flex items-center relative">
              <input
                type="text"
                placeholder="플레이어 이름 + #KR1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 bg-white"
              />
              <span className="px-4 text-gray-400">.GG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;