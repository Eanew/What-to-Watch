export const getRatingLevel = (score) => {
  const RatingLevel = {
    0: `Bad`,
    3: `Normal`,
    5: `Good`,
    8: `Very good`,
    10: `Awesome`,
  };

  const levelStep = Object.keys(RatingLevel).reverse().find((step) => step <= score);

  return RatingLevel[levelStep];
};
