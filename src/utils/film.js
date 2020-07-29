import {Rating} from "./const.js";

export const getRatingLevel = (ratingValue) => Object.values(Rating)
  .find((rankValue) => ratingValue >= rankValue);
