import {toKebabCase} from "../utils/common.js";
import {APPROVED_GENRES} from "../utils/const.js";

const filmsTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`];

const usersNames = [
  `Viktor Savinov`,
  `Alexandra Pushina`,
  `Julia Kim`,
  `Anton Timoshenkov`];

export const promo = {
  filmTitle: filmsTitles[0],
  genre: APPROVED_GENRES[0],
  release: 2014,
};

export const film = {
  id: filmsTitles[0] + 1,
  filmTitle: filmsTitles[0],
  release: 2011,
  runtime: 143,
  genre: APPROVED_GENRES[0],

  rating: {
    value: 6.3,
    votesCount: 2134,
  },

  image: {
    preview: `img/${toKebabCase(filmsTitles[0])}.jpg`,
    background: `img/bg-${toKebabCase(filmsTitles[0])}.jpg`,
    poster: `img/${toKebabCase(filmsTitles[0])}-poster.jpg`,
  },

  movie: {
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    full: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },

  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,

  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  isFavorite: false,
};

export const films = filmsTitles.map((title, i) => ({
  id: title + i,
  filmTitle: title,
  release: 2011 + i,
  runtime: 30 + i * 60,
  genre: APPROVED_GENRES[i],

  rating: {
    value: 3.4 + i,
    votesCount: 153 + i * 421,
  },

  image: {
    preview: `img/${toKebabCase(title)}.jpg`,
    background: `img/bg-${toKebabCase(title)}.jpg`,
    poster: `img/${toKebabCase(title)}-poster.jpg`,
  },

  movie: {
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    full: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },

  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,

  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  isFavorite: i % 2,
}));

export const review = {
  id: `comment1`,
  userName: usersNames[0],
  rating: 6.3,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`,
};

export const reviews = usersNames.map((name, i) => ({
  id: `comment${i + 1}`,
  userName: name,
  rating: 3.2 + i,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`,
}));
