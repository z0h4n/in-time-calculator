/**
 * Parses a string to retrieve integer value
 * @param {string} val
 * @returns {number}
 */
export function toInt(val) {
  return parseInt(val, 10);
}

/**
 * Converts hours to milliseconds
 * @param {number} val
 * @returns {number}
 */
export function hrsToMsecs(val) {
  return val * 1000 * 60 * 60
}

/**
 * Prepends the input string with zeroes when its length < minLength
 * @param {string} val
 * @param {number} length - Default 2
 * @returns {string}
 */
export function prependZeros(val, minLength = 2) {
  val = val.toString().split('');

  if (val.length < minLength) {
    const zeroArr = new Array(2 - val.length);
    zeroArr.fill(0);
    val = [...zeroArr, ...val];
  }

  return val.join('');
}

/**
 * Convert the time provided in milliseconds in hours, minutes, seconds format
 * @param {number} time - Milliseconds
 * @returns {string} time in hours, minutes, seconds format
 */
export function toTimeString(time) {
  const hours = time / hrsToMsecs(1);
  const minutes = (hours - toInt(hours)) * 60;
  const seconds = (minutes - toInt(minutes)) * 60;

  let timeArray = [hours, minutes, seconds].map(value => prependZeros(toInt(value)));

  return timeArray.join(':');
}