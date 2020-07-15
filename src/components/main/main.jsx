import React from "react";
import PropTypes from "prop-types";

import {toKebabCase} from "../../utils/common.js";

const APPROVED_GENRES = [
  `Comedy`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thriller`];

const GenresNavigation = {
  ALL: `All genres`,
  COMEDIES: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMAS: `Dramas`,
  HORROR: `Horror`,
  FAMILY: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLERS: `Thrillers`,
};

const Main = (props) => {
  const {
    promo,
    filmsTitles,
    onFilmTitleClick,
  } = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src={`img/bg-${toKebabCase(promo.name)}.jpg`}
            alt={promo.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a
              className="logo__link"
            >
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
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={`img/${toKebabCase(promo.name)}-poster.jpg`}
                alt={`${promo.name} poster`}
                width="218" height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2
                className="movie-card__title"
              >
                {promo.name}
              </h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promo.genre}</span>
                <span className="movie-card__year">{promo.release}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {Object.values(GenresNavigation).map((it, i) => (
              <li
                key={it + i}
                className={`catalog__genres-item${i === 0 ? ` catalog__genres-item--active` : ``}`}
              >
                <a
                  href="#"
                  className="catalog__genres-link"
                >
                  {it}
                </a>
              </li>
            ))}
          </ul>

          <div className="catalog__movies-list">
            {filmsTitles.map((it, i) => (
              <article
                key={it + i}
                className="small-movie-card catalog__movies-card"
              >
                <div className="small-movie-card__image">
                  <img
                    src={`img/${toKebabCase(it)}.jpg`}
                    alt={it}
                    width="280" height="175"
                  />
                </div>
                <h3 className="small-movie-card__title">
                  <a
                    onClick={onFilmTitleClick}
                    className="small-movie-card__link"
                    href="movie-page.html"
                  >
                    {it}
                  </a>
                </h3>
              </article>
            ))}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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

Main.propTypes = {
  promo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.oneOf(APPROVED_GENRES).isRequired,
    release: PropTypes.string.isRequired,
  }).isRequired,
  filmsTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
};

export default Main;
