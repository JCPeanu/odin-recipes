function pigLatin(string) {
    arr = string.split(" ")
    for (let j = 0; j < arr.length; j ++){
        let i = 0
            if (arr[j][0] !== 'a' && arr[j][0] !== 'e' && arr[j][0] !== 'i' && arr[j][0] !== 'o' && arr[j][0] !== 'u'){
                if (arr[j][1] !== 'a' && arr[j][1] !== 'e' && arr[j][1] !== 'i' && arr[j][1] !== 'o' && arr[j][1] !== 'u'){
                    if (arr[j][2] !== 'a' && arr[j][2] !== 'e' && arr[j][2] !== 'i' && arr[j][2] !== 'o' && arr[j][2] !== 'u'){
                        arr[j] = arr[j].substring(3) + arr[j].substring(0, 3) + "ay"
                    }
                    else if (arr[j][1] === 'q' && arr[j][2] === 'u'){
                        arr[j] = arr[j].substring(3) + arr[j].substring(0, 3) + "ay"
                    }
                    else{
                    arr[j] = arr[j].substring(2) + arr[j].substring(0, 2) + "ay"
                    }
                }
                else if(arr[j][0] === 'q' && arr[j][1] === 'u'){
                    arr[j] = arr[j].substring(2) + arr[j].substring(0, 2) + "ay"
                }
                else{
                    arr[j] = arr[j].substring(1) + arr[j].substring(0, 1) + "ay"
                }
            }
            else{
                arr[j] += "ay"
            }
    }
    return arr.join(' ')
};
  
// Do not edit below this line
module.exports = pigLatin;
