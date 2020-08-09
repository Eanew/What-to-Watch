import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

import {Genre} from "../../utils/const.js";

import {getFilms} from "../data/selectors.js";

const NAME_SPACE = NameSpace.FILMS;

export const getCurrentGenre = (state) => state[NAME_SPACE].genre;
export const getDisplayedFilmsCount = (state) => state[NAME_SPACE].displayedFilmsCount;

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
