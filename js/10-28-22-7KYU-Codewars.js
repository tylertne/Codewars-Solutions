// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let nums = []
    for(let i = 0; i < array.length; i++){
        nums.push(array[i].toString().length)
    }
    let maxLength = nums.reduce((a,b) => Math.max(a,b))
    let num = array.find(item => item.toString().length == maxLength)
    return num
    
}
