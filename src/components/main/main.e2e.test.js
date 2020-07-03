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
  it(`Should be pressed`, () => {
    const headerClickHandler = jest.fn();

    const main = shallow(<Main
      promoName={promo.name}
      promoGenre={promo.genre}
      promoRelease={promo.release}
      filmsTitles={filmsTitles}
      onHeaderClick={headerClickHandler}
    />);

    const moviesTitles = main.find(`.small-movie-card__link`);

    moviesTitles.forEach((title) => {
      title.simulate(`click`);
    });

    expect(headerClickHandler).toHaveBeenCalledTimes(moviesTitles.length);
  });
});
