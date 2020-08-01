export const getRandomCount = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomItems = (items, length = items.length) => {
  const clonedItems = [...items];
  const randomItems = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomCount(0, clonedItems.length - 1);
    const randomItem = clonedItems.splice(randomIndex, 1)[0];
    randomItems.push(randomItem);
  }
  return randomItems;
};
