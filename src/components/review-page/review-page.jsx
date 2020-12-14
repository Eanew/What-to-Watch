import React from "react";
import {Link} from "react-router-dom";
import {AppRoute, ID_PATH} from "../../utils/const.js";

import pt from "../../prop-types-cover.js";

const ReviewPage = (props) => {
  const {
    userInfo,
    film,
    starsCount,
    onMoviePageClick,
    isSubmitButtonEnabled,
    onLogoLinkClick,
    onStarsChange,
    onCommentInput,
    onSubmit,
    onAvatarClick,
  } = props;

  const {
    id,
    filmTitle,
    image,
  } = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img
            alt={filmTitle}
            src={image.background}
            style={{backgroundColor: image.backgroundColor}}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link
              onClick={onLogoLinkClick}
              className="logo__link"
              to={AppRoute.MAIN}
            >
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  onClick={onMoviePageClick}
                  to={AppRoute.MOVIE_PAGE.replace(ID_PATH, id)}
                  className="breadcrumbs__link"
                >
                  {filmTitle}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img
                onClick={onAvatarClick}
                // src={userInfo.avatar} // сервер перестал отдавать картинки
                src="/img/avatar.jpg"
                alt="User avatar"
                width="63" height="63"
              />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={image.poster}
            alt={`${filmTitle} poster`}
            width="218" height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form
          onSubmit={onSubmit}
          className="add-review__form"
          action="#"
        >
          <div className="rating">
            <div
              onChange={onStarsChange}
              className="rating__stars"
            >

              {new Array(starsCount).fill(``).map((starButton, i) => (
                <React.Fragment key = {`star${i + 1}`}>
                  <input
                    className="rating__input"
                    id={`star-${i + 1}`}
                    type="radio"
                    name="rating"
                    value={i + 1}
                  />
                  <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
                </React.Fragment>
              ))}

            </div>
          </div>

          <div className="add-review__text">
            <textarea
              onInput={onCommentInput}
              id="review-text"
              name="review-text"
              className="add-review__textarea"
              placeholder="Review text"
            ></textarea>

            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={!isSubmitButtonEnabled}
                style={isSubmitButtonEnabled ? null : {opacity: `0.4`}}
              >
                Post
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

ReviewPage.propTypes = {
  userInfo: pt.userInfo,
  film: pt.film,
  starsCount: pt.number,
  isSubmitButtonEnabled: pt.bool,
  onMoviePageClick: pt.func,
  onLogoLinkClick: pt.func,
  onStarsChange: pt.func,
  onCommentInput: pt.func,
  onSubmit: pt.func,
  onAvatarClick: pt.func,
};

export default ReviewPage;
