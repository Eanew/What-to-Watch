import React from "react";
import pt from "prop-types";

import FilmCard from "../film-card/film-card.jsx";

export default class Films extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCardId: null,
    };

    this._handleCardHover = this._handleCardHover.bind(this);
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            filmsHandlers={this.props.filmsHandlers}
          />
        ))}
      </div>
    );
  }

  _handleCardHover(id) {
    this.setState({hoveredCardId: id});
  }
}

Films.propTypes = {
  films: pt.arrayOf(FilmCard.propTypes.film).isRequired,
  filmsHandlers: FilmCard.propTypes.filmsHandlers,
};
