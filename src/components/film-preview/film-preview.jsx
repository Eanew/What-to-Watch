import React from "react";
import pt from "prop-types";

import {PreviewSize} from "../../utils/const.js";
import {PREVIEW_PLAY_TIMEOUT} from "../../config.js";

import PreviewVideoPlayer from "../preview-video-player/preview-video-player.jsx";

export default class FilmPreview extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
      isTimeoutPassed: false,
      isCanPlay: false,
      isPlayerAlreadyMounted: false,
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleCanPlay = this._handleCanPlay.bind(this);
  }

  render() {
    const {
      filmTitle,
      image,
      movie,
      onClick,
    } = this.props;

    const {
      isHovered,
      isTimeoutPassed,
      isCanPlay,
      isPlayerAlreadyMounted
    } = this.state;

    const isPlaying = (isHovered && isTimeoutPassed && isCanPlay);

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={onClick}
      >
        <img
          src={image.preview}
          alt={filmTitle}
          width={PreviewSize.WIDTH}
          height={PreviewSize.HEIGHT}
          className={isPlaying ? `visually-hidden` : ``}
        />

        {(isHovered || isPlayerAlreadyMounted) && (
          <PreviewVideoPlayer
            isPlaying={isPlaying}
            image={image}
            movie={movie}
            width={PreviewSize.WIDTH}
            height={PreviewSize.HEIGHT}
            onCanPlay={this._handleCanPlay}
          />
        )}
      </div>
    );
  }

  _handleMouseEnter() {
    this.setState({
      isHovered: true,
      isPlayerAlreadyMounted: true,
    });

    this._playTimeoutId = window.setTimeout(() => {
      this.setState({
        isTimeoutPassed: true,
      });
    }, PREVIEW_PLAY_TIMEOUT);
  }

  _handleMouseLeave() {
    this.setState({
      isHovered: false,
      isTimeoutPassed: false,
    });

    window.clearTimeout(this._playTimeoutId);
  }

  _handleCanPlay() {
    this.setState({
      isCanPlay: true,
    });
  }
}

FilmPreview.propTypes = {
  image: PreviewVideoPlayer.propTypes.image,
  movie: PreviewVideoPlayer.propTypes.movie,
  filmTitle: pt.string.isRequired,
  onClick: pt.func.isRequired,
};
