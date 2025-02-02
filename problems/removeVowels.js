/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

const removeVowels = str => {
    let newStr = ""
    let vowels = "aeiouAEIOU"
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (!vowels.includes(element)) {
            newStr += element
        }
    }
    return newStr
}

module.exports = removeVowels
