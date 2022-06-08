const sumAll = function(x, y) {
    if ((typeof x != "number" || typeof y != "number") || (x < 0 || y < 0)){
        return "ERROR"
    }
    let small = 0;
    let big = 0;
    if (x < y){
        small = x;
        big = y;
    }
    else{
        small = y;
        big = x;
    }
    console.log(typeof x != "number")
    console.log(typeof y != "number")
    let num = 0;
    for (let i = small; i <=big; i ++){
        num += i;
    }
    return num
};

// Do not edit below this line
module.exports = sumAll;
