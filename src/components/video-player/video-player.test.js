import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

import {film} from "../../mocks/test-mock.js";

it(`Should VideoPlayerComponent render correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer
        isPlaying={false}
        src={film.movie.preview}
        poster={film.image.preview}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
