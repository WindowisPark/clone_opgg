// src/pages/ChampionsPage.jsx
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChampionsPage = () => {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const response = await fetch('http://localhost:8000/champions');
        const data = await response.json();
        // 한글 이름 기준으로 정렬
        const sortedChampions = data.sort((a, b) => 
          a.name.localeCompare(b.name, 'ko-KR')
        );
        setChampions(sortedChampions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  const checkInitialSound = (str) => {
    const CHOSUNG = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    return str.split('').map(char => {
      const code = char.charCodeAt(0);
      if (code >= 44032 && code <= 55203) {
        return CHOSUNG[Math.floor((code - 44032) / 588)];
      }
      return char;
    }).join('');
  };
  
  const filteredChampions = champions.filter(champion => {
    if (!searchTerm) return true;
    
    // 초성 검색인지 확인
    if (/^[ㄱ-ㅎ]+$/.test(searchTerm)) {
      // 챔피언 이름의 초성 추출
      const nameInitials = checkInitialSound(champion.name);
      return nameInitials.includes(searchTerm);
    } 
    
    // 일반 검색
    return champion.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="px-4 py-2">
      <div className="w-[400px] bg-white rounded-lg p-4">
        <div className="relative mb-4">
          <input 
            type="text"
            placeholder="챔피언 검색 (이름, 초성)"
            className="w-full px-3 py-2 pl-10 border rounded-md text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>
        
        <div className="grid grid-cols-6 gap-1">
          {filteredChampions.map((champion) => (
            <div 
              key={champion.champion_id} 
              className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors duration-200"
              onClick={() => navigate(`/champions/${champion.champion_id}`)}
            >
              <img 
                src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${champion.champion_id}.png`}
                alt={champion.name}
                className="w-10 h-10 rounded"
              />
              <span className="text-[11px] mt-1 text-center truncate w-full">
                {champion.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChampionsPage;