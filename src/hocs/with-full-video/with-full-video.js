import React from "react";

import pt from "../../prop-types-cover.js";

import {toFullScreen, cancelFullScreen} from "../../utils/full-screen.js";

const withFullVideo = (Component) => {
  class WithFullVideo extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        isPlaying: true,
        isFullScreen: false,
        progress: 0,
      };

      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
      this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.ontimeupdate = () => this.setState({
        progress: Math.floor(video.currentTime),
      });
    }

    render() {
      const {film, onExitButtonClick} = this.props;
      const {filmTitle, movie} = film;
      const {isPlaying, progress} = this.state;

      return (
        <Component
          filmTitle={filmTitle}
          isPlaying={isPlaying}
          duration={NaN}
          progress={progress}
          onPlayButtonClick={this._handlePlayButtonClick}
          onFullScreenButtonClick={this._handleFullScreenButtonClick}
          onExitButtonClick={onExitButtonClick}
        >
          <video
            className="player__video"
            poster="img/player-poster.jpg"
            controls={false}
            autoPlay={true}
            playsInline={true}
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

      if (this.state.isFullScreen) {
        toFullScreen(video);
      } else {
        cancelFullScreen();
      }
    }

    _handlePlayButtonClick() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying,
      }));
    }

    _handleFullScreenButtonClick() {
      this.setState((prevState) => ({
        isFullScreen: !prevState.isFullScreen,
      }));
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.ontimeupdate = null;
      video.src = ``;
      video.poster = ``;
    }
  }

  WithFullVideo.propTypes = {
    film: pt.film,
    onExitButtonClick: pt.func,
  };

  return WithFullVideo;
};

export default withFullVideo;
