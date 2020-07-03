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
  `Macbeth`];

describe(`Films titles`, () => {
  it(`Should be pressed`, () => {
    const filmTitleClickHandler = jest.fn();

    const main = shallow(<Main
      promo={promo}
      filmsTitles={filmsTitles}
      onFilmTitleClick={filmTitleClickHandler}
    />);

    const moviesTitles = main.find(`.small-movie-card__link`);

    moviesTitles.forEach((title) => {
      title.simulate(`click`);
    });

    expect(filmTitleClickHandler).toHaveBeenCalledTimes(moviesTitles.length);
  });
});
