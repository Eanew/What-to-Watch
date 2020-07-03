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
  `Macbeth`];

it(`Should AppComponent render correctly`, () => {
  const tree = renderer
    .create(<App
      promo={promo}
      filmsTitles={filmsTitles}
      onFilmTitleClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
