import pt from "prop-types";

import {Screen, Genre, Tab} from "./utils/const.js";

export const string = pt.string.isRequired;
export const number = pt.number.isRequired;
export const bool = pt.bool.isRequired;
export const func = pt.func.isRequired;
export const node = pt.node.isRequired;

export const children = pt.oneOfType([
  pt.arrayOf(node).isRequired,
  node
]).isRequired;

export const userInfo = pt.oneOfType([
  pt.shape({
    id: pt.oneOfType([
      string,
      number
    ]).isRequired,

    name: string,
    email: string,
    avatar: string,
  }).isRequired,

  pt.exact({}).isRequired,
]).isRequired;

export const screen = pt.oneOf(Object.values(Screen)).isRequired;

export const genre = pt.oneOf(Object.values(Genre)).isRequired;

export const currentTab = pt.oneOf(Object.values(Tab)).isRequired;

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

export const film = pt.oneOfType([
  pt.shape({
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
  }).isRequired,

  pt.exact({}).isRequired,
]).isRequired;

export const films = pt.oneOfType([
  pt.arrayOf(film).isRequired,
  pt.exact([]).isRequired
]).isRequired;

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

export const reviews = pt.oneOfType([
  pt.arrayOf(review).isRequired,
  pt.exact([]).isRequired
]).isRequired;

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
  currentTab,

  rating,
  image,
  movie,
  film,
  films,
  review,
  reviews,
};
