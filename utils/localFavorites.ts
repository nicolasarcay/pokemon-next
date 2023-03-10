const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  if (favorites.includes(id)) {
    // retorna un arreglo sin el id que le viene en la funcion
    favorites = favorites.filter(pokeId => pokeId !== id);
  } else {
    favorites.push(id);
  }
  // ahora debo volver a grabar en el localstorage
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default {
  toggleFavorite,
  existInFavorites,
  pokemons,
};
