const palindromes = function (str) {
    str = str.toLowerCase()
    const regex = /[A-Za-z]/g;
    str = str.match(regex).join('')
    const found = str.match(regex).reverse().join('');
    console.log(found)
    return found === str;
};

// Do not edit below this line
module.exports = palindromes;
