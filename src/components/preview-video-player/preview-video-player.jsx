import React from "react";
import pt from "prop-types";

import {PREVIEW_PLAY_TIMEOUT} from "../../config.js";

export default class PreviewVideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isTimeoutPassed: false,
      isCanPlay: false,
    };
  }

  componentDidMount() {
    const {
      image,
      movie,
      width,
      height,
    } = this.props;

    const video = this._videoRef.current;

    video.src = movie.preview;
    video.poster = image.preview;
    video.width = width;
    video.height = height;
    video.muted = true;

    video.oncanplay = () => {
      this.setState({
        isCanPlay: true,
      });
    };

    this._playTimeoutId = window.setTimeout(() => {
      this.setState({
        isTimeoutPassed: true,
      });
    }, PREVIEW_PLAY_TIMEOUT);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {onPlayStart} = this.props;
    const {isTimeoutPassed, isCanPlay} = this.state;

    if (isTimeoutPassed && isCanPlay) {
      video.play();
      onPlayStart();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplay = null;
    video.src = ``;
    video.poster = ``;

    window.clearTimeout(this._playTimeoutId);
  }

  render() {
    const {isTimeoutPassed, isCanPlay} = this.state;

    return (
      <video
        ref={this._videoRef}
        className={(isTimeoutPassed && isCanPlay) ? `` : `visually-hidden`}
      >
      </video>
    );
  }
}

PreviewVideoPlayer.propTypes = {
  image: pt.shape({
    preview: pt.string.isRequired,
    background: pt.string.isRequired,
    poster: pt.string.isRequired,
  }).isRequired,

  movie: pt.shape({
    preview: pt.string.isRequired,
    full: pt.string.isRequired,
  }).isRequired,

  width: pt.string.isRequired,
  height: pt.string.isRequired,
  onPlayStart: pt.func.isRequired,
};
