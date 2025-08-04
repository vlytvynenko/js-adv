//Sum of element in array with loop

let arr = [2,4,6];

function sumLoop(arr) {
  let total = 0;
  for (var index in arr) {
    total += arr[index]
    //console.log("Loop", total)
  }
  return total
}

var sumL = sumLoop(arr);
console.log('Loop', sumL)

//recursion case

function sumRecursion(arr, index) {
  //Base Case: if the index is equal to the length of the array return 0
  if (index === arr.length) {
    return 0
  }
  return arr[index] + sumRecursion(arr, index + 1)
}

//Calculate sume of arrray with initial index 0
var sum = sumRecursion(arr, 0)

console.log('Recursion', sum)

function bigestNumber(arr) {
  let big = 0;
  for (var index in arr) {
    if (arr[index] > big) {
      big = arr[index]
    }
  }
  return big
}

var big = bigestNumber(arr);

console.log(big)
