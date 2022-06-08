const snakeCase = function(x) {
    let wrd = ""
    for (let i = 0; i < x.length; i ++){
        if (x[i] === '.' && x[i + 1] === '.' && x[i + 2] !== '.'){
            wrd += "_"
        }
        else if (x.charCodeAt(i) >= 65 && x.charCodeAt(i) <= 90 && (i === 0)){
            wrd += x[i].toLowerCase()
        }
        else if ((x[i] === " " && x.charCodeAt(i + 1) >= 65 && x.charCodeAt(i + 1) <= 90)){
            wrd += "_"
            wrd += x[i + 1].toLowerCase()
            i ++
        }
        else if (x.charCodeAt(i) >= 65 && x.charCodeAt(i) <= 90){
            wrd += "_"
            wrd += x[i].toLowerCase()
        }
        else if(x[i] === " " || x[i] === "-"){
            wrd += "_"
        }
        else if (x[i] === "?" || x[i] === "." || x[i] === ","){
            wrd += ""
        }
        else{
            wrd += x[i]
        }
    }
    return wrd
};

// Do not edit below this line
module.exports = snakeCase;
