const findTheOldest = function(arr) {
    let years = 0
    const d = new Date();
    if (typeof arr[0].yearOfDeath != 'undefined'){
        years = arr[0].yearOfDeath - arr[0].yearOfBirth
    }
    else{
        years = d.getFullYear() - arr[0].yearOfBirth
    }
    let index = 0
    let temp = 0
    for (let i = 1; i < arr.length; i ++){
        temp = 0
        if (typeof arr[i].yearOfDeath !== 'undefined'){
            temp = arr[i].yearOfDeath - arr[i].yearOfBirth
        }
        else{
            temp = d.getFullYear() - arr[i].yearOfBirth
        }
        if (years < temp){
            years = temp;
            index = i;
        }
    }
    return arr[index]
};

// Do not edit below this line
module.exports = findTheOldest;
