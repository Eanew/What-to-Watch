export default {
  parse: (raw) => raw.map((review) => ({
    id: review[`id`],
    userId: review[`user`][`id`],
    userName: review[`user`][`name`],
    rating: review[`rating`],
    comment: review[`comment`],
    date: review[`date`],
  })),

  toPost: (review) => ({
    "rating": review.rating,
    "comment": review.comment,
  }),
};
