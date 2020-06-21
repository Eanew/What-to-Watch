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
  SPACE: Letter.SPACE,
  ESC: `Escape`,
  ENTER: `Enter`,
};

export const toKebabCase = (defaultString) => defaultString
  .toLowerCase()
  .trim()
  .replace(Regular.WORD_SEPARATION, Letter.DASH);
