import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

it(`Should VideoPlayerComponent render correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer
        isPlaying={false}
        src={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
        poster={`img/midnight-special.jpg`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
