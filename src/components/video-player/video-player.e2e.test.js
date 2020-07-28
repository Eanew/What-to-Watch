import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Video player`, () => {
  it(`Should have playing state`, () => {
    const videoPlayer = shallow(
        <VideoPlayer
          isPlaying={false}
          src={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
          poster={`img/midnight-special.jpg`}
        />, {
          disableLifecycleMethods: true,
        }
    );

    const video = videoPlayer.find(`video`);
    expect(videoPlayer.state().isPlaying).toBe(false);

    video.simulate(`play`);
    expect(videoPlayer.state().isPlaying).toBe(true);

    video.simulate(`emptied`);
    expect(videoPlayer.state().isPlaying).toBe(false);
  });
});
