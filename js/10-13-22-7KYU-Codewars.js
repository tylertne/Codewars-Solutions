// If　a = 1, b = 2, c = 3 ... z = 26


// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

function wordsToMarks(string){
    let count = 0
    for(let i = 0; i < string.length; i++){
      count += (string.charCodeAt(i) - 96)
    }
    return count
  }