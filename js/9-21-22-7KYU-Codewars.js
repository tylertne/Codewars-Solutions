// Your task is to write function factorial.

function factorial(n){
    let count = 1
    for(let i = n; i > 0; i--){
      count *= i
    }
    return count
}