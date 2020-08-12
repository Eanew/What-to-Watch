import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

import Player from "../../components/player/player.jsx";
import withFullVideo from "./with-full-video.js";

import {film} from "../../test-mock.js";

const PlayerWrapped = withFullVideo(Player);

configure({
  adapter: new Adapter(),
});

describe(`With full video`, () => {
  it(`Should toggle play/pause`, () => {
    const player = mount(
        <Router history={history}>
          <Switch>
            <Route exact path="">
              <PlayerWrapped
                onExitButtonClick={() => {}}
                film={Object.assign({}, film, {
                  movie: {
                    preview: ``,
                    full: ``,
                  },
                })}
              />
            </Route>
          </Switch>
        </Router>
    );

    const playEventMock = jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});
    const pauseEventMock = jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});

    player.find(`.player__play`).simulate(`click`, {});
    expect(playEventMock).toHaveBeenCalledTimes(1);
    expect(pauseEventMock).toHaveBeenCalledTimes(0);

    player.find(`.player__play`).simulate(`click`, {});
    expect(playEventMock).toHaveBeenCalledTimes(1);
    expect(pauseEventMock).toHaveBeenCalledTimes(1);
  });
});
