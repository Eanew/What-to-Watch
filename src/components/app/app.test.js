import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

const headerClickHandler = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      promoName={promo.name}
      promoGenre={promo.genre}
      promoRelease={promo.release}
      filmsTitles={filmsTitles}
      onHeaderClick={headerClickHandler}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
