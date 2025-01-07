import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Link 추가
import Home from './pages/Home';
import ChampionsPage from './pages/ChampionsPage';
import ChampionDetailPage from './pages/ChampionDetailPage';

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen bg-[#5383E8]">
        <header className="w-full border-b border-white/10">
          <nav className="px-4">
            <ul className="flex gap-8 text-white/80 h-[50px] items-center justify-center">
              <li>
                <Link to="/" className="hover:text-white text-white/90">홈</Link>
              </li>
              <li>
              <Link to="/champions" className="hover:text-white text-white/90">챔피언 분석</Link>
              </li>
              <li>
              <Link to="/champions" className="hover:text-white text-white/90">게임 모드</Link>
              </li>
              <li>
              <Link to="/champions" className="hover:text-white text-white/90">랭킹</Link>
              </li>
              <li>
              <Link to="/champions" className="hover:text-white text-white/90">프로 관전</Link>
              </li>
              <li>
              <Link to="/champions" className="hover:text-white text-white/90">멀티서치</Link>
              </li>
              <li>
              <Link to="/champions" className="hover:text-white text-white/90">커뮤니티</Link>
              </li>
              <li>
              <Link to="/champions" className="hover:text-white text-white/90">강의</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/champions" element={<ChampionsPage />} />
            <Route path="/champions/:championId" element={<ChampionDetailPage />} />
            <Route path="/gamemode" element={<div>Game Mode Page</div>} />
            <Route path="/ranking" element={<div>Ranking Page</div>} />
            <Route path="/community" element={<div>Community Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;