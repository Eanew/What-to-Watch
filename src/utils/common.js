export const Letter = {
  SPACE: ` `,
  COMMA: `,`,
  DASH: `-`,
};

export const Regular = {
  NUMBERS: /\d+/g,
  EXCEPT_NUMBERS: /(\D+)*[^.\d]/g,
  EMPTY_SPACE: /\s+/g,
  WORD_SEPARATION: /(\s|:\s|:)+/g,
};

export const Key = {
  SPACE: `Space`,
  ESC: `Escape`,
  ENTER: `Enter`,
};

export const toKebabCase = (defaultString) => defaultString
  .toLowerCase()
  .trim()
  .replace(Regular.WORD_SEPARATION, Letter.DASH);

export const splitNumber = (defaultNumber, partsLength = 3) => {
  const invertedNumber = [...defaultNumber.toString()].reverse().join(``);
  let number = ``;

  for (let i = 0; i < invertedNumber.length; i += partsLength) {
    number += invertedNumber.slice(i, i + partsLength) + ` `;
  }
  return [...number].reverse().join(``).trim();
};
