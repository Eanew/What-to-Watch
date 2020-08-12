import React from "react";

import pt from "../../prop-types-cover.js";

import {toggleFullScreen} from "../../utils/full-screen.js";

import {HIDE_VIDEO_CONTROLS_TIMEOUT} from "../../config.js";

const withFullVideo = (Component) => {
  class WithFullVideo extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        isPlaying: false,
        isControlsHidden: false,
        duration: null,
        progress: 0,
      };

      this._hideControlsTimeout = null;

      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
      this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
      this._showControls = this._showControls.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;

      if (video) {
        video.onloadedmetadata = () => this.setState({
          duration: video.duration,
        });

        video.ontimeupdate = () => this.setState({
          progress: Math.ceil(video.currentTime),
        });
      }

      this._hideControlsTimeout = window.setTimeout(() => this.setState({
        isControlsHidden: true,
      }), HIDE_VIDEO_CONTROLS_TIMEOUT);
    }

    render() {
      const {film, onExitButtonClick} = this.props;
      const {id, filmTitle, image, movie} = film;
      const {isPlaying, isControlsHidden, duration, progress} = this.state;

      return (
        <Component
          id={id}
          filmTitle={filmTitle}
          isPlaying={isPlaying}
          isControlsHidden={isControlsHidden}
          duration={duration || 0}
          progress={progress}
          onMouseMove={this._showControls}
          onPlayButtonClick={this._handlePlayButtonClick}
          onFullScreenButtonClick={this._handleFullScreenButtonClick}
          onExitButtonClick={onExitButtonClick}
        >
          <video
            className="player__video"
            poster={image.background}
            controls={false}
            autoPlay={true}
            ref={this._videoRef}
          >
            <source
              src={movie.full}
              type="video/mp4"
            />
          </video>
        </Component>
      );
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    _handlePlayButtonClick() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying,
      }));
    }

    _handleFullScreenButtonClick() {
      const player = document.querySelector(`.player`);
      toggleFullScreen(player);
      this._showControls();
    }

    _showControls() {
      this.setState({
        isControlsHidden: false,
      });

      if (this._hideControlsTimeout) {
        window.clearTimeout(this._hideControlsTimeout);
      }
      this._hideControlsTimeout = window.setTimeout(() => this.setState({
        isControlsHidden: true,
      }), HIDE_VIDEO_CONTROLS_TIMEOUT);
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.onloadedmetadata = null;
      video.ontimeupdate = null;
      video.src = ``;
      video.poster = ``;

      window.clearTimeout(this._hideControlsTimeout);
    }
  }

  WithFullVideo.propTypes = {
    film: pt.film,
    onExitButtonClick: pt.func,
  };

  return WithFullVideo;
};

export default withFullVideo;
