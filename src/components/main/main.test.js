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
  `Macbeth`];

it(`Should MainComponent render correctly`, () => {
  const tree = renderer
    .create(<Main
      promo={promo}
      filmsTitles={filmsTitles}
      onFilmTitleClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
