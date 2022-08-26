//Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
    const sorted = arr.sort((a,b) => a - b)
    return [sorted[0], sorted[sorted.length - 1]]
}