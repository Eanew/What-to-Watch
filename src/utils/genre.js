import {Genre} from "./const.js";

export const mapGenreToTab = (genre) => {
  switch (genre) {
    case Genre.ALL:
      return `All genres`;
    case Genre.ACTION:
      return `Actions`;
    case Genre.ADVENTURE:
      return `Adventures`;
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
    case Genre.FANTASY:
      return `Fantasy`;
    case Genre.ROMANCE:
      return `Romance`;
    case Genre.SCI_FI:
      return `Sci-Fi`;
    case Genre.THRILLER:
      return `Thrillers`;

    default:
      return genre;
  }
};
