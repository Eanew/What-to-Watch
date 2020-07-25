import React from "react";
import pt from "prop-types";

import {PREVIEW_PLAY_TIMEOUT} from "../../config.js";

export default class PreviewVideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isCanPlay: false,
      isPlaying: false,
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

    video.oncanplay = (() => {
      this.setState({
        isCanPlay: true,
      });
    });

    this._playTimeoutId = window.setTimeout(() => {
      this.setState((prevState) => ({
        isPlaying: prevState.isCanPlay,
      }));
    }, PREVIEW_PLAY_TIMEOUT);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.play();
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this._playTimeoutId);

    const video = this._videoRef.current;

    video.canplay = null;
    video.src = ``;
    video.poster = ``;
  }

  render() {
    const {
      onMouseLeave,
    } = this.props;

    return (
      <video
        ref={this._videoRef}
        onMouseLeave={onMouseLeave}
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
  onMouseLeave: pt.func.isRequired,
};
