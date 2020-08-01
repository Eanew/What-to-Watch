import {HOUR_IN_MINUTES, Letter, toTwoDigit} from './common.js';

export const getRatingScore = (rating) => rating.toString().replace(`.`, `,`)
  .split(``).map((char, i, chars) => (i === 0 && i === chars.length - 1) ? char + `,0` : char).join(``);

export const getDuration = (minutesAmount, spaceBetween = false) => {
  const hours = Math.floor(minutesAmount / HOUR_IN_MINUTES)
    ? `${Math.floor(minutesAmount / HOUR_IN_MINUTES)}${spaceBetween ? Letter.SPACE : ``}h`
    : ``;

  const restOfMinutes = minutesAmount % HOUR_IN_MINUTES
    ? ` ${minutesAmount % HOUR_IN_MINUTES}${spaceBetween ? Letter.SPACE : ``}m`
    : ``;

  const minutes = hours
    ? restOfMinutes
    : `${minutesAmount}${spaceBetween ? Letter.SPACE : ``}m`;

  return hours + minutes;
};

export const getReviewDate = (iso) => {
  const date = new Date(Date.parse(iso));

  const month = date.toLocaleString(`en-US`, {
    month: `long`,
  });

  return `${month} ${toTwoDigit(date.getDate())}, ${date.getFullYear()}`;
};
