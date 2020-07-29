import React from "react";
import renderer from "react-test-renderer";
import Films from "./films.jsx";

import {toKebabCase} from "../../utils/common.js";
import {APPROVED_GENRES} from "../../utils/const.js";

it(`Should FilmsComponent render correctly`, () => {
  const filmsTitles = [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`];

  const tree = renderer.create(
      <Films
        films={filmsTitles.map((filmTitle, i) => ({
          id: filmTitle + i,
          filmTitle,
          release: 2011 + i,
          genre: APPROVED_GENRES[i],

          rating: {
            value: 3.4 + i,
            votesCount: 153 * i,
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

            `Gustave prides himself on providing first-class service to the hotel&rsquo;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&rsquo;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],

          director: `Wes Andreson`,
          starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`][i],
        }))}
        onFilmCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
