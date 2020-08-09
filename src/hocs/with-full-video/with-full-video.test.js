import React from "react";
import renderer from "react-test-renderer";

import Player from "../../components/player/player.jsx";
import withFullVideo from "./with-full-video.js";

import {film} from "../../test-mock.js";

const PlayerWrapped = withFullVideo(Player);

it(`Should PlayerWrappedComponent render corrently`, () => {
  const tree = renderer.create(
      <PlayerWrapped
        film={film}
        onExitButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
