const caesar = function(x, num) {
    let str = ""
    num %= 26
    if (num < 0){
        num = 26 + num
    }
    for (let i = 0; i < x.length; i ++){
        if (x[i].match(/[a-z]/i)){
            var code = x.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                str += String.fromCharCode(((code - 65 + num) % 26) + 65);
            }
        
              // Lowercase letters
              else if (code >= 97 && code <= 122) {
                str += String.fromCharCode(((code - 97 + num) % 26) + 97);
            }
        }
        else{
            str += x.charAt(i)
        }
    }
    return str
};

// Do not edit below this line
module.exports = caesar;
