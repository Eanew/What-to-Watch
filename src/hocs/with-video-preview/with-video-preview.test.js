import React from "react";
import renderer from "react-test-renderer";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

import FilmCard from "../../components/film-card/film-card.jsx";
import withVideoPreview from "./with-video-preview.js";

import {film} from "../../test-mock.js";

const FilmCardWrapped = withVideoPreview(FilmCard);

it(`Should FilmCardWrappedComponent render corrently`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Switch>
          <Route exact path="">
            <FilmCardWrapped
              film={film}
              onFilmCardClick={() => {}}
            />
          </Route>
        </Switch>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
