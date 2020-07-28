import React from "react";
import pt from "prop-types";

export default class PreviewVideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const {
      src,
      poster,
    } = this.props;

    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;
    video.muted = true;
    video.loop = true;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.poster = ``;
  }

  render() {
    return (
      <video
        ref={this._videoRef}
        width="280"
        height="175"
      ></video>
    );
  }
}

PreviewVideoPlayer.propTypes = {
  isPlaying: pt.bool.isRequired,
  src: pt.string.isRequired,
  poster: pt.string.isRequired,
};
