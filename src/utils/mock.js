export const getRandomCount = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getUniqueRandomItem = (collection) => {
  const randomCount = getRandomCount(0, collection.length - 1);
  return collection.splice(randomCount, 1)[0];
};
