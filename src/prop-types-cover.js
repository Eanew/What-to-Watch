import pt from "prop-types";

import {Genre, Screen, Tab} from "./utils/const.js";

export const string = pt.string.isRequired;
export const number = pt.number.isRequired;
export const bool = pt.bool.isRequired;
export const func = pt.func.isRequired;
export const node = pt.node.isRequired;

export const children = pt.oneOfType([
  pt.arrayOf(node).isRequired,
  node
]).isRequired;

export const screen = pt.oneOf(Object.values(Screen)).isRequired;

export const genre = pt.oneOf(Object.values(Genre)).isRequired;

export const rating = pt.shape({
  value: number,
  votesCount: number,
}).isRequired;

export const image = pt.shape({
  preview: string,
  background: string,
  poster: string,
}).isRequired;

export const movie = pt.shape({
  preview: string,
  full: string,
}).isRequired;

export const currentFilm = pt.shape({
  id: pt.oneOfType([
    string,
    number
  ]).isRequired,

  genre,
  rating,
  image,
  movie,

  filmTitle: string,
  release: number,
  runtime: number,
  description: string,
  director: string,
  starring: pt.arrayOf(pt.string).isRequired,
  isFavorite: bool,
});

export const film = currentFilm.isRequired;

export const films = pt.arrayOf(film).isRequired;

export const review = pt.shape({
  id: pt.oneOfType([
    string,
    number
  ]).isRequired,

  userName: string,
  rating: number,
  comment: string,
}).isRequired;

export const reviews = pt.arrayOf(review).isRequired;

export const currentTab = pt.oneOf(Object.values(Tab)).isRequired;

export default {
  string,
  number,
  bool,
  func,
  node,
  children,

  screen,
  genre,
  rating,
  image,
  movie,
  currentFilm,
  film,
  films,
  review,
  reviews,
  currentTab,
};
