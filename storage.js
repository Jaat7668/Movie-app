// Local storage key
const FAVORITES_KEY = 'movie-favorites';

// Save favorites to local storage
export function saveFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

// Load favorites from local storage
export function loadFavorites() {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
}