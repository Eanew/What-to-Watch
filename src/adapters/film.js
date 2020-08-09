const parseFilm = (raw) => ({
  id: raw[`id`],
  filmTitle: raw[`name`],
  genre: raw[`genre`],
  runtime: raw[`run_time`],
  release: raw[`released`],
  description: raw[`description`],

  rating: {
    value: raw[`rating`],
    votesCount: raw[`scores_count`],
  },

  image: {
    preview: raw[`preview_image`],
    poster: raw[`poster_image`],
    background: raw[`background_image`],
    backgroundColor: raw[`background_color`],
  },

  movie: {
    preview: raw[`preview_video_link`],
    full: raw[`video_link`],
  },

  director: raw[`director`],
  starring: raw[`starring`],
  isFavorite: raw[`is_favorite`],
});

export default {
  parse: (raw) => Array.isArray(raw)
    ? raw.map((film) => parseFilm(film))
    : parseFilm(raw),
};
