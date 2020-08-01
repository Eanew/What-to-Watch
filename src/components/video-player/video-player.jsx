import React from "react";

import pt from "../../prop-types-cover.js";

export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isPlaying: this.props.isPlaying,
    };

    this._handleVideoPlay = this._handleVideoPlay.bind(this);
    this._handleVideoEmptied = this._handleVideoEmptied.bind(this);
  }

  render() {
    const {
      src,
      poster,
    } = this.props;

    return (
      <video
        width="280"
        height="175"
        ref={this._videoRef}
        poster={poster}
        controls={false}
        autoPlay={false}
        muted={true}
        loop={true}
        onPlay={this._handleVideoPlay}
        onEmptied={this._handleVideoEmptied}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
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

    video.onplay = null;
    video.onemptied = null;
    video.src = ``;
    video.poster = ``;
  }

  _handleVideoPlay() {
    this.setState({
      isPlaying: true,
    });
  }

  _handleVideoEmptied() {
    this.setState({
      isPlaying: false,
    });
  }
}

VideoPlayer.propTypes = {
  isPlaying: pt.bool,
  src: pt.string,
  poster: pt.string,
};
