import React from "react";

import pt from "../../prop-types-cover.js";

export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isPlaying: this.props.isPlaying,
    };
  }

  componentDidMount() {
    const {
      src,
      poster,
    } = this.props;

    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;
    video.controls = false;
    video.autoPlay = false;
    video.muted = true;
    video.loop = true;

    video.onplay = this.setState({
      isPlaying: true,
    });

    video.emptied = this.setState({
      isPlaying: false,
    });
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

  render() {
    return (
      <video
        ref={this._videoRef}
        width="280"
        height="175"
      >
        <source src={this.props.src} type="video/mp4" />
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: pt.bool,
  src: pt.string,
  poster: pt.string,
};
