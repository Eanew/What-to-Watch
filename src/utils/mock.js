export const getRandomCount = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomItems = (items, length) => {
  const clonedItems = items.slice();
  const randomItems = [];

  for (let i = 0; i < (length || items.length); i++) {
    const randomIndex = getRandomCount(0, clonedItems.length - 1);
    const randomItem = clonedItems.splice(randomIndex, 1)[0];
    randomItems.push(randomItem);
  }
  return randomItems;
};
