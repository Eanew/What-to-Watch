import pt from "prop-types";

import {Screen, Genre, MovieTab} from "./utils/const.js";

export const string = pt.string.isRequired;
export const number = pt.number.isRequired;
export const bool = pt.bool.isRequired;
export const func = pt.func.isRequired;
export const node = pt.node.isRequired;

export const children = pt.oneOfType([
  pt.arrayOf(node).isRequired,
  node
]).isRequired;

export const userInfo = pt.shape({
  isAuthorized: bool,

  id: pt.oneOfType([
    string,
    number
  ]),

  name: pt.string,
  email: pt.string,
  avatar: pt.string,
}).isRequired;

export const screen = pt.oneOf(Object.values(Screen)).isRequired;

export const genre = pt.oneOf(Object.values(Genre)).isRequired;
export const genres = pt.arrayOf(genre).isRequired;

export const currentTab = pt.oneOf(Object.values(MovieTab)).isRequired;

export const rating = pt.shape({
  value: number,
  votesCount: number,
}).isRequired;

export const image = pt.shape({
  preview: string,
  poster: string,
  background: string,
  backgroundColor: string,
}).isRequired;

export const movie = pt.shape({
  preview: string,
  full: string,
}).isRequired;

export const starring = pt.arrayOf(pt.string).isRequired;

export const film = pt.shape({
  id: pt.oneOfType([
    string,
    number
  ]).isRequired,

  filmTitle: string,
  release: number,
  runtime: number,
  description: string,
  director: string,
  isFavorite: bool,

  genre,
  rating,
  image,
  movie,
  starring,
});

export const films = pt.arrayOf(film);

export const review = pt.shape({
  id: pt.oneOfType([
    string,
    number
  ]).isRequired,

  userId: pt.oneOfType([
    string,
    number
  ]).isRequired,

  userName: string,
  rating: number,
  comment: string,
  date: string,
}).isRequired;

export const reviews = pt.arrayOf(review);

export default {
  string,
  number,
  bool,
  func,
  node,
  children,

  userInfo,

  screen,
  genre,
  genres,
  currentTab,

  rating,
  image,
  movie,
  starring,
  film,
  films,
  review,
  reviews,
};
