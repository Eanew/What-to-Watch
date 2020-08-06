import React from "react";

import pt from "../../prop-types-cover.js";

import {MOVIE_PAGE_FILMS_TO_DISPLAY} from "../../config.js";

import Films from "../films/films.jsx";
import TabsNavigation from "../tabs-navigation/tabs-navigation.jsx";
import withTabs from "../../hocs/with-tabs/with-tabs.js";

const TabsNavigationWrapped = withTabs(TabsNavigation);

const MoviePage = (props) => {
  const {
    film,
    reviews,
    films,
    onFilmCardClick,
  } = props;

  const {
    filmTitle,
    release,
    genre,
    image,
  } = film;

  const similarFilms = films.sort((first, second) => second.rating.value - first.rating.value)
    .filter((movie) => (movie.genre === film.genre) && (movie !== film)).slice(0, MOVIE_PAGE_FILMS_TO_DISPLAY);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img
              src={image.background}
              alt={filmTitle}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">
                {filmTitle}
              </h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">
                  {genre}
                </span>
                <span className="movie-card__year">
                  {release}
                </span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={image.poster}
                alt={`${filmTitle} poster`}
                width="218" height="327"
              />
            </div>

            <div className="movie-card__desc">

              <TabsNavigationWrapped
                film={film}
                reviews={reviews}
              />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {(similarFilms && similarFilms.length !== 0) && (
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <Films
              films={similarFilms}
              onFilmCardClick={onFilmCardClick}
            />
          </section>
        )}

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  film: pt.film,
  reviews: pt.reviews,
  films: pt.films,
  onFilmCardClick: pt.func,
};

export default MoviePage;
