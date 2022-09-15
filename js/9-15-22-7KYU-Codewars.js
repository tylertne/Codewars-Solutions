// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    let a = []
    let b = []
  for(let i = 0; i < s.length; i++){
    if(i % 2 == 0){
      a.push(s[i].toUpperCase());
      b.push(s[i])
    }
    else if(i % 2 == 1){
      a.push(s[i]);
      b.push(s[i].toUpperCase())
    }
  }
  return[a.join(''), b.join('')]
  };