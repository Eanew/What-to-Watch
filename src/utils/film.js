import {Rating} from "./const.js";

export const getFilmRank = (ratingValue) => {
  for (const rank in Rating) {
    if (Rating.hasOwnProperty(rank) && ratingValue.replace(`,`, `.`) >= Rating[rank]) {
      return rank;
    }
  }
  return ``;
};
