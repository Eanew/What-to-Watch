import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const promo = {
  name: `The Grand Budapest Hotel`,
  genre: `Comedy`,
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

it(`Should MainComponent render correctly`, () => {
  const tree = renderer
    .create(<Main
      promoName={promo.name}
      promoGenre={promo.genre}
      promoRelease={promo.release}
      filmsTitles={filmsTitles}
      onHeaderClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
