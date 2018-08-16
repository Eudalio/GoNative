export const addFavoriteRequest = repoName => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: {
    repoName,
  },
});

export const addFavoriteSucess = repository => ({
  type: 'ADD_FAVORITE_SUCESS',
  payload: {
    repository,
  },
});
