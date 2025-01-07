// src/pages/ChampionDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChampionDetailPage = () => {
  const { championId } = useParams();
  const [activeTab, setActiveTab] = useState('build');
  const [championData, setChampionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/champions/${championId}`);
        const data = await response.json();
        setChampionData(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChampionData();
  }, [championId]);

  if (loading) return <div className="text-white p-4">Loading...</div>;
  if (!championData) return <div className="text-white p-4">Champion not found</div>;

  return (
    <div className="min-h-screen bg-[#5383E8]">
      {/* 챔피언 기본 정보 */}
      <div className="bg-[#5383E8] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-6">
            <img 
              src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${championId}.png`}
              alt={championData.name}
              className="w-20 h-20 rounded"
            />
            <div>
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-white">{championData.name}</h1>
                <span className="text-white/80">빌드 - {championData.position}, 패치 {championData.version}</span>
              </div>
              <div className="text-white/70 text-sm mt-2">
                {championData.games_played}회 플레이 되었습니다.
              </div>
              {/* 승률/픽률/밴률 정보 */}
              <div className="flex gap-8 mt-4">
                <div>
                  <div className="text-white/70 text-sm">승률</div>
                  <div className="text-xl font-bold text-blue-400">51.25%</div>
                </div>
                <div>
                  <div className="text-white/70 text-sm">픽률</div>
                  <div className="text-xl font-bold text-green-400">4.93%</div>
                </div>
                <div>
                  <div className="text-white/70 text-sm">밴률</div>
                  <div className="text-xl font-bold text-red-400">2.30%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4">
            {['빌드', '아이템', '카운터', '룬', '스킬', '팁'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-medium ${
                  activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-6">
          {/* 왼쪽 섹션 - 룬 빌드 */}
          <div className="col-span-2 space-y-6">
            {/* 룬 섹션 */}
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-bold mb-4">추천 룬</h2>
              {/* 룬 데이터 표시 */}
            </div>

            {/* 스킬 빌드 섹션 */}
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-bold mb-4">스킬 빌드</h2>
              {/* 스킬 순서 표시 */}
            </div>

            {/* 시작 아이템 섹션 */}
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-bold mb-4">시작 아이템</h2>
              {/* 시작 아이템 표시 */}
            </div>
          </div>

          {/* 오른쪽 섹션 - 카운터 챔피언 */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-bold mb-4">상대하기 어려운 챔피언</h2>
              {/* 카운터 챔피언 목록 */}
            </div>

            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-bold mb-4">상대하기 쉬운 챔피언</h2>
              {/* 카운터 챔피언 목록 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionDetailPage;