import pt from "prop-types";

import {APPROVED_GENRES, Screen, Tab} from "./utils/const.js";

export const screen = pt.oneOf(Object.values(Screen)).isRequired;

export const promo = pt.shape({
  filmTitle: pt.string.isRequired,
  genre: pt.oneOf(APPROVED_GENRES).isRequired,
  release: pt.number.isRequired,
}).isRequired;

export const image = pt.shape({
  preview: pt.string.isRequired,
  background: pt.string.isRequired,
  poster: pt.string.isRequired,
}).isRequired;

export const movie = pt.shape({
  preview: pt.string.isRequired,
  full: pt.string.isRequired,
}).isRequired;

export const rating = pt.shape({
  value: pt.number.isRequired,
  votesCount: pt.number.isRequired,
}).isRequired;

export const film = pt.shape({
  id: pt.oneOfType([
    pt.string.isRequired,
    pt.number.isRequired
  ]).isRequired,

  filmTitle: pt.string.isRequired,
  release: pt.number.isRequired,
  runtime: pt.number.isRequired,
  genre: pt.oneOf(APPROVED_GENRES).isRequired,
  description: pt.string.isRequired,
  director: pt.string.isRequired,
  starring: pt.arrayOf(pt.string).isRequired,
  isFavorite: pt.bool.isRequired,

  image,
  movie,
  rating,
}).isRequired;

export const currentFilm = pt.oneOfType(film, pt.oneOf([null]).isRequired).isRequired;

export const films = pt.arrayOf(film).isRequired;

export const review = pt.shape({
  id: pt.oneOfType([
    pt.string.isRequired,
    pt.number.isRequired
  ]).isRequired,

  userName: pt.string.isRequired,
  rating: pt.number.isRequired,
  comment: pt.string.isRequired,
}).isRequired;

export const reviews = pt.arrayOf(review).isRequired;

export const currentTab = pt.oneOf(Object.values(Tab)).isRequired;

export const string = pt.string.isRequired;
export const number = pt.number.isRequired;
export const bool = pt.bool.isRequired;
export const func = pt.func.isRequired;

export default {
  screen,
  promo,
  image,
  movie,
  rating,
  film,
  currentFilm,
  films,
  review,
  reviews,
  currentTab,

  string,
  number,
  bool,
  func,
};
