import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;

export const getFetchingStatus = (state) => state[NAME_SPACE].isFetching;
export const getPromo = (state) => state[NAME_SPACE].promo;
export const getFilms = (state) => state[NAME_SPACE].films;
export const getFavorites = (state) => state[NAME_SPACE].favorites;
export const getReviews = (state) => state[NAME_SPACE].reviews;

export default {
  getFetchingStatus,
  getPromo,
  getFilms,
  getFavorites,
  getReviews,
};
