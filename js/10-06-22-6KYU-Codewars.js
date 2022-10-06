// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let splitted = string.split('')
    let uppers = []
    splitted.forEach((letter,index,arr) => {
      if(letter === letter.toUpperCase()){
        uppers.push(index)
      }
    })
    uppers.forEach((num,index) => {
      splitted.splice(num + index, 0, ' ')
    })
  return splitted.join('')
}
