function qsort(arr) {
    //base case checking if there 1 elements simplest to sort
    if (arr.length < 2) {
        return arr;
    
    } 
    //this case taking first element and then sort all elements to smaller and bigger comparing to first
    else {
        let pivot = arr[0];
        let less = [];
        let greater = [];
        for (let i = 1; i < arr.length; i ++) {
            if (arr[i] < pivot) {
                less.push(arr[i])
            } else {
                greater.push(arr[i])
            }
        }
        //reqursivly call function for sorted before less and greater arrays to sort until base case.
        return [...qsort(less),pivot,...qsort(greater)]
    }
}

let exArr = [11,43,5,456,2,66,4]
console.log(qsort(exArr))