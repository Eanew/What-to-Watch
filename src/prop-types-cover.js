import pt from "prop-types";

import {APPROVED_GENRES, Tab} from "./utils/const.js";

export const promo = pt.shape({
  name: pt.string.isRequired,
  genre: pt.oneOf(APPROVED_GENRES).isRequired,
  release: pt.string.isRequired,
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

export const film = pt.shape({
  image,
  movie,
  id: pt.string.isRequired,
  filmTitle: pt.string.isRequired,
  release: pt.number.isRequired,
  genre: pt.oneOf(APPROVED_GENRES).isRequired,

  rating: pt.shape({
    value: pt.string.isRequired,
    votes: pt.string.isRequired,
  }).isRequired,

  description: pt.arrayOf(pt.string).isRequired,
  director: pt.string.isRequired,
  starring: pt.arrayOf(pt.string).isRequired,
}).isRequired;

export const films = pt.arrayOf(film).isRequired;

export const currentTab = pt.oneOf(Object.values(Tab)).isRequired;

export const bool = pt.bool.isRequired;
export const func = pt.func.isRequired;

export default {
  promo,
  image,
  movie,
  film,
  films,
  currentTab,
  bool,
  func,
};