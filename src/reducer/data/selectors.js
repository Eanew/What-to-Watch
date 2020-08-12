import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

import {Regular} from "../../utils/common.js";

const NAME_SPACE = NameSpace.DATA;

export const getFetchingStatus = (state) => state[NAME_SPACE].isFetching;
export const getPromo = (state) => state[NAME_SPACE].promo;
export const getFilms = (state) => state[NAME_SPACE].films;
export const getFavorites = (state) => state[NAME_SPACE].favorites;
export const getReviews = (state) => state[NAME_SPACE].reviews;

export const getCurrentFilmId = () => location.pathname.split(`/`)
  .find((pathUnit) => Regular.NUMBERS.test(pathUnit));

export const getCurrentFilm = createSelector(
    getFilms,
    getCurrentFilmId,

    (films, id) => (films && id) ? films.find((film) => film.id === +id) : null
);

export default {
  getFetchingStatus,
  getPromo,
  getFilms,
  getFavorites,
  getReviews,
  getCurrentFilmId,
  getCurrentFilm,
};
