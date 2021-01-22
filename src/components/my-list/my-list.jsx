import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../utils/const.js";

import pt from "../../prop-types-cover.js";

import Films from "../films/films.jsx";

const MyList = (props) => {
  const {
    userInfo,
    films,
    onFilmCardClick,
    onLogoLinkClick,
  } = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
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

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img
              // src={userInfo.avatar} // сервер перестал отдавать аватарки
              src="/img/avatar.jpg"
              alt="User avatar"
              width="63" height="63"
            />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Films
          films={films}
          onFilmCardClick={onFilmCardClick}
        />

      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link
            onClick={onLogoLinkClick}
            className="logo__link logo__link--light"
            to={AppRoute.MAIN}
          >
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {
  userInfo: pt.userInfo,
  films: pt.films,
  onFilmCardClick: pt.func,
  onLogoLinkClick: pt.func,
};

export default MyList;
