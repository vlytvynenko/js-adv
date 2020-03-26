//Create 2 functions to replace methods Reduce right and reduce.

Array.prototype.reduce2 = function(fn, acc){
  var result = acc !== undefined ? acc : this[0];
  for (var i = 0; i < this.length; i++) {
    result = fn(result, this[i]);
  }
  return result;
};

const arr1 = [1, 2, 3, 4];
const reducer = (acc, curentVal) => acc + curentVal;

console.log(arr1.reduce2(reducer))
console.log(arr1.reduce2(reducer, 5))
