import React from "react";
import renderer from "react-test-renderer";
import Details from "./details.jsx";

import {APPROVED_GENRES} from "../../utils/const.js";
import {toKebabCase} from "../../utils/common.js";

const filmsTitles = [`Fantastic Beasts: The Crimes of Grindelwald`];

it(`Should DetailsComponent render correctly`, () => {
  const tree = renderer
    .create(<Details
      film={{
        id: `1`,
        filmTitle: filmsTitles[0],
        release: 2003,
        genre: APPROVED_GENRES[0],
        rating: {
          value: `7,9`,
          votes: `2 367`,
        },
        images: {
          preview: `img/${toKebabCase(filmsTitles[0])}.jpg`,
          background: `img/bg-${toKebabCase(filmsTitles[0])}.jpg`,
          poster: `img/${toKebabCase(filmsTitles[0])}-poster.jpg`,
        },
        description: [
          `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&rsquo;s friend and protege.`,

          `Gustave prides himself on providing first-class service to the hotel&rsquo;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&rsquo;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
        ],
        director: `Wes Andreson`,
        starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      }}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
