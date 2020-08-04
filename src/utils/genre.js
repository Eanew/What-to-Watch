import {Genre} from "./const.js";

export const mapGenreToTab = (genre) => {
  switch (genre) {
    case Genre.COMEDY:
      return `Comedies`;
    case Genre.CRIME:
      return `Crime`;
    case Genre.DOCUMENTARY:
      return `Documentary`;
    case Genre.DRAMA:
      return `Dramas`;
    case Genre.HORROR:
      return `Horror`;
    case Genre.FAMILY:
      return `Kids & Family`;
    case Genre.ROMANCE:
      return `Romance`;
    case Genre.SCI_FI:
      return `Sci-Fi`;
    case Genre.THRILLER:
      return `Thrillers`;

    default:
      return `All genres`;
  }
};

export const getFilmsByGenre = (films, genre) => (genre === Genre.ALL)
  ? films
  : films.filter((film) => film.genre === genre);
