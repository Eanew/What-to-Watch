import React from "react";
import pt from "prop-types";

import FilmCard from "../film-card/film-card.jsx";

export default class Films extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null,
    };

    this._handleCardHover = this._handleCardHover.bind(this);
  }

  render() {
    const {films, onFilmCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            onPreviewHover={this._handleCardHover}
            onFilmCardClick={onFilmCardClick}
          />
        ))}
      </div>
    );
  }

  _handleCardHover(filmCard) {
    this.setState({hoveredCard: filmCard});
  }
}

Films.propTypes = {
  films: pt.arrayOf(FilmCard.propTypes.film).isRequired,
  onFilmCardClick: FilmCard.propTypes.onFilmCardClick,
};
