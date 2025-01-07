# React + Vite

# Clone OPGG

OP.GG 클론 프로젝트는 Riot Games API를 활용하여 챔피언, 매치, 서머너 데이터를 분석하고 통계 기반 정보를 제공하는 웹 애플리케이션입니다.

---

## 📌 프로젝트 목표
- **Riot API 활용**: Riot Games에서 제공하는 데이터를 수집 및 분석.
- **통계 및 시각화**: 승률, 픽률, 카운터 정보, 빌드 통계 등 데이터 기반의 유용한 정보를 제공.
- **사용자 경험**: OP.GG와 유사한 인터페이스를 제공하여 익숙한 사용성을 유지.

---

## 🛠️ 기술 스택
- **백엔드**: Python, FastAPI, PostgreSQL
- **프론트엔드**: React (섹션까지만 구현함)
- **데이터베이스**: PostgreSQL
- **API**: Riot Games API

---

## 📋 현재 진행 상황
1. **데이터베이스 설계 완료**
   - **챔피언 테이블**
   - **매치 데이터 테이블**
   - **서머너 통계 테이블**
   - **룬/아이템/스킬 통계 테이블**

2. **DB 생성**
   ```sql
   -- 챔피언 테이블 (기존)
   CREATE TABLE champions (
       id SERIAL PRIMARY KEY,
       version VARCHAR(20),
       champion_id VARCHAR(50),
       name VARCHAR(100),
       title VARCHAR(100),
       tags JSON,
       stats JSON,
       image_url VARCHAR(255),
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   -- 매치 데이터 테이블
   CREATE TABLE matches (
       match_id VARCHAR(30) PRIMARY KEY,
       game_creation TIMESTAMP,
       game_duration INT,
       queue_id INT,
       game_version VARCHAR(20),
       platform_id VARCHAR(10),
       map_id INT
   );

   -- 서머너 통계 테이블
   CREATE TABLE summoners (
       summoner_id VARCHAR(50) PRIMARY KEY,
       account_id VARCHAR(50),
       puuid VARCHAR(100),
       name VARCHAR(50),
       tier VARCHAR(20),
       rank VARCHAR(5),
       lp INT,
       games_played INT,
       wins INT,
       losses INT,
       preferred_position VARCHAR(20)
   );

   -- 룬/아이템/스킬 통계 테이블
   CREATE TABLE stats (
       id SERIAL PRIMARY KEY,
       type VARCHAR(20), -- 'runes', 'items', 'skills'
       detail JSON,
       win_rate FLOAT,
       pick_rate FLOAT
   );
