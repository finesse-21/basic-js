const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Extract the heights that are not -1 and sort them
  const heights = arr.filter(value => value !== -1).sort((a, b) => a - b);

  // Create a new array to store the sorted heights with -1 in their original positions
  let index = 0;
  return arr.map(value => {
    if (value === -1) {
      return value;
    } else {
      return heights[index++];
    }
  });
}

module.exports = {
  sortByHeight
};
