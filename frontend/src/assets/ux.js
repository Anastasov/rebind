const REQUIRES_AN = ['a', 'e', 'i', 'o', 'u', 'ho'];
const EXCEPTIONS = ['eu'];
const wordStartsWithOneOf = (word, prefixes) => prefixes.filter(prefix => word.startsWith(prefix))
  .length > 0;
const startsWithVollow = word => wordStartsWithOneOf(word, REQUIRES_AN);
const isExceptionToRule = word => wordStartsWithOneOf(word, EXCEPTIONS);
export const formatRequiredThing = (thing) => {
  const word = thing.toLowerCase();
  const displayAn = startsWithVollow(word) && !isExceptionToRule(word);
  return `Please enter ${displayAn ? 'an' : 'a'} ${word}`;
};

const normalizeNameWord = (input) => {
  const word = input.trim();
  const firstLetter = word.charAt(0);
  return word
    .toLowerCase()
    .replace(firstLetter, firstLetter.toUpperCase());
};
export const formatWrongThing = (thing, long, reason = '') => {
  const word = normalizeNameWord(thing);
  const reasonMessage = reason ? `: ${reason}` : '';
  return long ? `The ${word} you entered seems incorrect${reasonMessage}` : `${word} is not correct`;
};
