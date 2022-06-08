const fibonacci = function(x) {
    if (x < 0){
        return "OOPS";
    }
    x = parseInt(x);
    if (x == 1)
        return 1
    if (x == 2)
        return 1
    if (x == 3)
        return 2
    let a = 1;
    let b = 1;
    let c = a + b;
    for (let i = 3; i < x; i ++){
        a = b
        b = c
        c = a + b
    }
    return c
};

// Do not edit below this line
module.exports = fibonacci;
