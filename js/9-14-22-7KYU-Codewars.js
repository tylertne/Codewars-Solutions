// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
    const splitted = s.split('')
    let countUp = 0
    let countLow = 0
    splitted.forEach(letter => {
      if(letter.toUpperCase() === letter){
        countUp++
      }
      else{
        countLow++
      }
    })
    if(countUp > countLow){
      return splitted.map(letter => letter.toUpperCase()).join('') 
    }
  else{
    return splitted.map(letter => letter.toLowerCase()).join('') 
  }
}