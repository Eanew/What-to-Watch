import {toKebabCase} from "../utils/common.js";
import {getUniqueRandomItem} from "../utils/mock.js";

const FILMS_TO_DISPLAY = 8;

const APPROVED_GENRES = [
  `Comedy`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thriller`];

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

const generateFilms = () => {
  const films = [];

  for (let i = 0; i < FILMS_TO_DISPLAY; i++) {
    const filmTitle = getUniqueRandomItem(filmsTitles);

    films.push({
      id: `${i + 1}`,
      genre: APPROVED_GENRES[Math.floor(Math.random() * APPROVED_GENRES.length)],
      title: filmTitle,
      src: `img/${toKebabCase(filmTitle)}.jpg`,
    });
  }
  return films;
};

export default generateFilms();
