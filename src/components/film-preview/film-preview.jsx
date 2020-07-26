import React from "react";
import pt from "prop-types";

import {PreviewSize} from "../../utils/const.js";

import PreviewVideoPlayer from "../preview-video-player/preview-video-player.jsx";

export default class FilmPreview extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
      isPlaying: false,
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handlePlayStart = this._handlePlayStart.bind(this);
  }

  render() {
    const {
      filmTitle,
      image,
      movie,
      onClick,
    } = this.props;

    const {isHovered, isPlaying} = this.state;

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={onClick}
      >
        {isHovered && (
          <PreviewVideoPlayer
            image={image}
            movie={movie}
            width={PreviewSize.WIDTH}
            height={PreviewSize.HEIGHT}
            onPlayStart={this._handlePlayStart}
          />
        )}
        {!isPlaying && (
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
  }

  _handleMouseLeave() {
    this.setState({
      isHovered: false,
      isPlaying: false,
    });
  }

  _handlePlayStart() {
    this.setState({
      isPlaying: true,
    });
  }
}

FilmPreview.propTypes = {
  image: PreviewVideoPlayer.propTypes.image,
  movie: PreviewVideoPlayer.propTypes.movie,
  filmTitle: pt.string.isRequired,
  onClick: pt.func.isRequired,
};
