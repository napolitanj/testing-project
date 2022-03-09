const alpha = "abcdefghijklmnopqrstuvwxyz"
const cipher = "bcdefghijklmnopqrstuvwxyza"

function checkUpperCase(letter) {
    return (letter.toUpperCase() === letter);
}

function caesarCipher(letter) {
    let index = alpha.indexOf(letter)
    return index;
}

function cipherString(string) {
    let word = string.split('');
    let newString = ''
    word.forEach(letter => {
        if (checkUpperCase(letter) === true) {
            letter = letter.toLowerCase()
            newString += (cipher.charAt(caesarCipher(letter))).toUpperCase();
        } else {
            newString += cipher.charAt(caesarCipher(letter))
        }
    })
    return newString;
}


module.exports = cipherString;