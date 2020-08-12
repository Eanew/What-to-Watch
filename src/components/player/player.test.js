import React from "react";
import renderer from "react-test-renderer";
import Player from "./player.jsx";

it(`Should PlayerComponent render correctly`, () => {
  const tree = renderer.create(
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
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
