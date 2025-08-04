function binary_search(array, item) {
  var low = 0
  var high = array.length - 1

  while(low <= high) {
    mid = Math.floor((low + high) / 2)
    var guess = array[mid]
    if(guess === item) {
      return `Item index in arr: ${mid}`
    }
    if ( guess > item) {
      high = mid - 1
    }
    else {
      low = mid + 1
    }
  }
  return "No Item found"
}

var my_array = [1, 2, 3, 4, 8];

var result = binary_search(my_array, 4);
console.log(result)
