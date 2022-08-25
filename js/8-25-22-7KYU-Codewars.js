//Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.


function SeriesSum(n)
{
  if(n === 0) {
    return '0.00'
  }
  else{
  const num = 1
  let denom = 1
  let total = 1
  for(let i = 1; i < n; i++) {
    denom += 3
    total += (num/denom)
  }
  return total.toFixed(2)
    }
}