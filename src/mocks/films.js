import {FILMS_DISPLAY_STEP} from "../config.js";
import {APPROVED_GENRES} from "../utils/const.js";
import {toKebabCase} from "../utils/common.js";
import {getRandomCount, getRandomItems} from "../utils/mock.js";

const filmsTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`];

const generateFilms = () => getRandomItems(filmsTitles, FILMS_DISPLAY_STEP).map((filmTitle, i) => ({
  id: filmTitle + i,
  filmTitle,
  release: getRandomCount(1950, 2020),
  runtime: getRandomCount(30, 160),
  genre: getRandomItems(APPROVED_GENRES, 1)[0],
  rating: {
    value: getRandomCount(0, 100) / 10,
    votesCount: getRandomCount(1, 2000),
  },
  image: {
    preview: `img/${toKebabCase(filmTitle)}.jpg`,
    background: `img/bg-${toKebabCase(filmTitle)}.jpg`,
    poster: `img/${toKebabCase(filmTitle)}-poster.jpg`,
  },
  movie: {
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    full: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  description: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&rsquo;s friend and protege.`,

    `Gustave prides himself on providing first-class service to the hotel&rsquo;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&rsquo;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
  ],
  director: `Wes Andreson`,
  starring: getRandomItems([`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`], getRandomCount(1, 4)),
}));

export default generateFilms();
