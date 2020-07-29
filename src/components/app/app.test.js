import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

import {promo, films} from "../../mocks/test-mock.js";

it(`Should AppComponent render correctly`, () => {
  const tree = renderer.create(
      <App
        promo={promo}
        films={films}
        renderApp={() => {}}
        onFilmCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
