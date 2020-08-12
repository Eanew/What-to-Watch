import React from "react";
import renderer from "react-test-renderer";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

import Player from "../../components/player/player.jsx";
import withFullVideo from "./with-full-video.js";

import {film} from "../../test-mock.js";

const PlayerWrapped = withFullVideo(Player);

it(`Should PlayerWrappedComponent render corrently`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Switch>
          <Route exact path="">
            <PlayerWrapped
              film={film}
              onExitButtonClick={() => {}}
            />
          </Route>
        </Switch>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
