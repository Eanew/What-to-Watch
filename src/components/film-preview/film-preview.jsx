import React from "react";
import pt from "prop-types";

import {PreviewSize} from "../../utils/const.js";

import PreviewVideoPlayer from "../preview-video-player/preview-video-player.jsx";

export default class FilmPreview extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
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
    } = this.state;

    return (
      <div
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={onClick}
        className="small-movie-card__image"
      >
        {isHovered
          ? <PreviewVideoPlayer
            image={image}
            movie={movie}
            width={PreviewSize.WIDTH}
            height={PreviewSize.HEIGHT}
            onMouseLeave={this._handleMouseLeave}
          />

          : <img
            src={image.preview}
            alt={filmTitle}
            width={PreviewSize.WIDTH}
            height={PreviewSize.HEIGHT}
          />
        }
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
    });
  }
}

FilmPreview.propTypes = {
  image: PreviewVideoPlayer.propTypes.image,
  movie: PreviewVideoPlayer.propTypes.movie,
  filmTitle: pt.string.isRequired,
  onClick: pt.func.isRequired,
};
