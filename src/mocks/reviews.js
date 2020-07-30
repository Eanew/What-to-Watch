import {getRandomCount, getRandomItems} from "../utils/mock.js";

const usersNames = [
  `Viktor Savinov`,
  `Alexandra Pushina`,
  `Julia Kim`,
  `Anton Timoshenkov`];

const generateReviews = () => getRandomItems(usersNames).map((name, i) => ({
  id: `comment${i + 1}`,
  userName: name,
  rating: getRandomCount(0, 100) / 10,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `${getRandomCount(2004, 2019)}-0${getRandomCount(1, 9)}-${getRandomCount(0, 2)}8T14:13:56.569Z`,
}));

export default generateReviews();
