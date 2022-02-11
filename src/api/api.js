const API_KEY = 'key=2cb3683592f8476180f5bad07ffd961c';
const BASE_URL = 'https://api.rawg.io/api/';

export const getGamesUrl = () => `${BASE_URL}games?${API_KEY}&page=2&page_size=6`;