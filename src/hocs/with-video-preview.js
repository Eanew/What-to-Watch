import React from "react";

import {PREVIEW_PLAY_TIMEOUT} from "../config.js";

import VideoPlayer from "../components/video-player/video-player.jsx";

const withVideoPreview = (Component) => {
  return class WithVideoPreview extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isTimeoutPassed: false,
      };

      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
      this._renderPlayer = this._renderPlayer.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
          renderPlayer={this._renderPlayer}
        />
      );
    }

    _handleMouseEnter() {
      this._playTimeoutId = window.setTimeout(() => {
        this.setState({
          isTimeoutPassed: true,
        });
      }, PREVIEW_PLAY_TIMEOUT);
    }

    _handleMouseLeave() {
      this.setState({
        isTimeoutPassed: false,
      });

      window.clearTimeout(this._playTimeoutId);
    }

    _renderPlayer(src, poster) {
      return (
        <VideoPlayer
          isPlaying={this.state.isTimeoutPassed}
          src={src}
          poster={poster}
        />
      );
    }
  };
};

export default withVideoPreview;
