import React from "react";
import renderer from "react-test-renderer";
import Player from "./player.jsx";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

it(`Should PlayerComponent render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Switch>
          <Route exact path="">
            <Player
              id={1}
              filmTitle={`Aviator`}
              isPlaying={true}
              isControlsHidden={false}
              duration={300}
              progress={130}
              onMouseMove={() => {}}
              onPlayButtonClick={() => {}}
              onFullScreenButtonClick={() => {}}
              onExitButtonClick={() => {}}
            >
              <video>
                <source src="" type="video/mp4" />
              </video>
            </Player>
          </Route>
        </Switch>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
