import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

import {Genre} from "../../utils/const.js";
import {MAX_GENRES_IN_GENRES_LIST, MOVIE_PAGE_FILMS_TO_DISPLAY} from "../../config.js";

import {getFilms} from "../data/selectors.js";
import {getCurrentFilm} from "../data/selectors.js";

const NAME_SPACE = NameSpace.FILMS;

export const getCurrentGenre = (state) => state[NAME_SPACE].genre;
export const getDisplayedFilmsCount = (state) => state[NAME_SPACE].displayedFilmsCount;

export const getGenresList = createSelector(
    getFilms,

    (films) => {
      const filmsGenres = films.reduce((genres, film) => {
        return [film.genre, ...genres.filter((genre) => genre !== film.genre)];
      }, []);

      return [Genre.ALL, ...filmsGenres.sort()].slice(0, MAX_GENRES_IN_GENRES_LIST);
    }
);

export const getFilmsLikeCurrentFilm = createSelector(
    getFilms,
    getCurrentFilm,

    (films, currentFilm) => films
      .sort((first, second) => second.rating.value - first.rating.value)
      .filter((film) => (film.genre === currentFilm.genre) && (film !== currentFilm))
      .slice(0, MOVIE_PAGE_FILMS_TO_DISPLAY)
);

export const getFilmsByCurrentGenre = createSelector(
    getFilms,
    getCurrentGenre,

    (films, genre) => (genre === Genre.ALL) ? films : films.filter((film) => film.genre === genre)
);

export const getDisplayedFilms = createSelector(
    getFilmsByCurrentGenre,
    getDisplayedFilmsCount,

    (filteredFilms, displayedFilmsCount) => filteredFilms.slice(0, displayedFilmsCount)
);

export default {
  getCurrentGenre,
  getDisplayedFilmsCount,
  getGenresList,
  getFilmsLikeCurrentFilm,
  getFilmsByCurrentGenre,
  getDisplayedFilms,
};
