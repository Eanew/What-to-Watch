import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const promo = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: `2014`,
};

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

describe(`Headers`, () => {
  const headerClickHandler = jest.fn();
  let clicksCount = 0;

  const main = shallow(<Main
    promoName={promo.name}
    promoGenre={promo.genre}
    promoRelease={promo.release}
    filmsTitles={filmsTitles}
    onHeaderClick={headerClickHandler}
  />);

  const siteTitles = main.find(`.logo__link`);
  const promoTitle = main.find(`.movie-card__title`);
  const genresLinks = main.find(`.catalog__genres-link`);
  const moviesLinks = main.find(`.small-movie-card__link`);

  siteTitles.forEach((title, i) => {
    it(`Should site title${i} be pressed`, () => {
      title.simulate(`click`);
      expect(headerClickHandler.mock.calls.length).toBe(++clicksCount);
    });
  });

  it(`Should promo title be pressed`, () => {
    promoTitle.simulate(`click`);
    expect(headerClickHandler.mock.calls.length).toBe(++clicksCount);
  });

  genresLinks.forEach((genre) => {
    it(`Should ${genre.textContent} genre link be pressed`, () => {
      genre.simulate(`click`);
      expect(headerClickHandler.mock.calls.length).toBe(++clicksCount);
    });
  });

  moviesLinks.forEach((movie) => {
    it(`Should ${movie.textContent} movie link be pressed`, () => {
      movie.simulate(`click`);
      expect(headerClickHandler.mock.calls.length).toBe(++clicksCount);
    });
  });
});
