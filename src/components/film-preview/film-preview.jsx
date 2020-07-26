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
    };

    this._isPlayerShown = false;

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

    const {isHovered, isTimeoutPassed, isCanPlay} = this.state;

    let isPlaying = false;

    if (isHovered && isTimeoutPassed && isCanPlay) {
      isPlaying = true;
      this._isPlayerShown = true;
    }

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={onClick}
      >
        {(isHovered || this._isPlayerShown) && (
          <PreviewVideoPlayer
            isPlaying={isPlaying}
            image={image}
            movie={movie}
            width={PreviewSize.WIDTH}
            height={PreviewSize.HEIGHT}
            onCanPlay={this._handleCanPlay}
          />
        )}
        {!this._isPlayerShown && (
          <img
            src={image.preview}
            alt={filmTitle}
            width={PreviewSize.WIDTH}
            height={PreviewSize.HEIGHT}
          />
        )}
      </div>
    );
  }

  _handleMouseEnter() {
    this.setState({
      isHovered: true,
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
