import React from "react";

import pt from "../../prop-types-cover.js";

import {VISUALLY_HIDDEN_CLASS} from "../../utils/const.js";
import {toPercent, toTimeString} from "../../utils/common.js";

const Player = (props) => {
  const {
    filmTitle,
    isPlaying,
    isControlsHidden,
    duration,
    progress,
    onMouseMove,
    onPlayButtonClick,
    onFullScreenButtonClick,
    onExitButtonClick,
    children,
  } = props;

  const progressInPercents = toPercent(duration, progress);
  const timeElapsed = toTimeString(duration - progress);

  return (
    <div
      onMouseMove={onMouseMove}
      className="player"
    >

      {children}

      <button
        onClick={onExitButtonClick}
        className={`player__exit${isControlsHidden ? VISUALLY_HIDDEN_CLASS : ``}`}
        type="button"
      >
        Exit
      </button>

      <div className={`player__controls${isControlsHidden ? VISUALLY_HIDDEN_CLASS : ``}`}>
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={progressInPercents}
              max="100"
            ></progress>

            <div
              className="player__toggler"
              style={{left: `${progressInPercents}%`}}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            {timeElapsed}
          </div>
        </div>

        <div className="player__controls-row">
          <button
            onClick={onPlayButtonClick}
            type="button"
            className="player__play"
          >
            {isPlaying
              ? (
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
              ) : (
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
              )
            }

            <span>
              {isPlaying ? `Pause` : `Play`}
            </span>
          </button>
          <div className="player__name">
            {filmTitle}
          </div>

          <button
            onClick={onFullScreenButtonClick}
            type="button"
            className="player__full-screen"
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  filmTitle: pt.string,
  isPlaying: pt.bool,
  isControlsHidden: pt.bool,
  duration: pt.number,
  progress: pt.number,
  onMouseMove: pt.func,
  onPlayButtonClick: pt.func,
  onFullScreenButtonClick: pt.func,
  onExitButtonClick: pt.func,
  children: pt.children,
};

export default Player;
