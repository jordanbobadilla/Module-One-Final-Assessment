/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
const removeNumbersAtOddIndices = arr => arr.filter((el, i) => i % 2 !== 1)



module.exports = removeNumbersAtOddIndices