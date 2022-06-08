const removeFromArray = function(arr, ...args ) {
    let x = []
    isIn = false
    for (let i = 0; i < arr.length; i ++){
        for (let j = 0; j < args.length; j ++){
            if (arr[i] === args[j])
                isIn = true
        }
        if (!isIn){
            x.push(arr[i])
        }
        isIn = false
    }
    return x
}

// Do not edit below this line
module.exports = removeFromArray;
