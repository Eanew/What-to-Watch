import React from "react";
import pt from "prop-types";

export default class PreviewVideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isPlaying: this.props.isPlaying,
    };

    this._isHidden = true;
  }

  componentDidMount() {
    const {
      image,
      movie,
      width,
      height,
      onCanPlay,
    } = this.props;

    const video = this._videoRef.current;

    video.src = movie.preview;
    video.poster = image.preview;
    video.width = width;
    video.height = height;
    video.muted = true;
    video.loop = true;
    video.oncanplay = onCanPlay;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      // video.pause();
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplay = null;
    video.src = ``;
    video.poster = ``;
  }

  render() {
    if (this.props.isPlaying) {
      this._isHidden = false;
    }

    return (
      <video
        ref={this._videoRef}
        className={this._isHidden ? `visually-hidden` : ``}
      >
      </video>
    );
  }
}

PreviewVideoPlayer.propTypes = {
  isPlaying: pt.bool.isRequired,

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
  onCanPlay: pt.func.isRequired,
};
