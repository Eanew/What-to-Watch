import React from "react";

import pt from "../../prop-types-cover.js";

import {PREVIEW_PLAY_TIMEOUT} from "../../config.js";

const withVideoPreview = (Component) => {
  class WithVideoPreview extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        isHaveBeenLaunched: false,
        isTimeoutPassed: false,
      };

      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    render() {
      const {
        image,
        movie,
      } = this.props.film;

      return (
        <Component
          {...this.props}
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
        >
          <video
            width="280"
            height="175"
            preload="none"
            poster={image.preview}
            controls={false}
            muted={true}
            loop={true}
            ref={this._videoRef}
          >
            <source
              src={movie.preview}
              type="video/mp4"
            />
          </video>
        </Component>
      );
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isHaveBeenLaunched, isTimeoutPassed} = this.state;

      if (isTimeoutPassed) {
        video.play();
      } else if (isHaveBeenLaunched) {
        video.load();
      }
    }

    _handleMouseEnter() {
      this.setState({
        isHaveBeenLaunched: true,
      });
      this._playTimeoutId = window.setTimeout(() => {
        this.setState({
          isTimeoutPassed: true,
        });
      }, PREVIEW_PLAY_TIMEOUT);
    }

    _handleMouseLeave() {
      this.setState({
        isTimeoutPassed: false,
      });

      window.clearTimeout(this._playTimeoutId);
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.src = ``;
      video.poster = ``;

      window.clearTimeout(this._playTimeoutId);
    }
  }

  WithVideoPreview.propTypes = {
    film: pt.film,
  };

  return WithVideoPreview;
};

export default withVideoPreview;
