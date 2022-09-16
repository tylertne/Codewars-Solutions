// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

function minValue(values){
    let uniqueArray = [];
          for(i=0; i < values.length; i++){
              if(uniqueArray.indexOf(values[i]) === -1) {
                  uniqueArray.push(values[i]);
              }
        }
    let sorted = uniqueArray.sort()
    
    return Number(sorted.join(''))
  }