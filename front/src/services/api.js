// src/services/api.js
const BASE_URL = 'http://localhost:8000'; // FastAPI 서버 주소

export const getChampions = async () => {
  try {
    const response = await fetch(`${BASE_URL}/champions`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching champions:', error);
    throw error;
  }
};