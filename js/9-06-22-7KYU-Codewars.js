// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .

function maxMultiple(divisor, bound){
    let arr = []
    
    for(let i = 1; i <= bound; i++){
      if(i % divisor === 0){
        arr.push(i)
      }
    }
     return arr.reduce((a,b) => Math.max(a,b))
   }
