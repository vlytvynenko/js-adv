//Home work, realize simple mechanic of generators.
function generator(init, end){
  let acc = init;

  return {
    next(plus) {
      if (acc <= end) {
        acc += plus;

        return {
          value: acc,
          done: false
        }
      } else {
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}

// Make the above function using generator function ES6

function* generator2(init, end) {
  let sum = init;

  while (sum <= end) {
    yield sum;

    sum += init
  }

}

//The way how to iteract with generators

const useGenerator = generator(0, 5);

console.log(useGenerator.next(1))
