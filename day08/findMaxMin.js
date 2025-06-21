// challenge 13: Find the Maximum and Minimum numbers in an Array


function findMaxMin(a){
    let high = a[0];
    let low = a[0];

    for (let number of a){
        if (number > high){
            high = number;
        } else if (number < low){
            low = number;
        }
    }
    return [high, low];
}


console.log(findMaxMin([1, 2, 3, 4, 5]));         // [5, 1]
console.log(findMaxMin([-10, -5, -3, -20]));      // [-3, -20]
console.log(findMaxMin([100]));                  // [100, 100]
console.log(findMaxMin([0, 0, 0, 0]));            // [0, 0]
console.log(findMaxMin([3, -2, 7, 1, -8, 4]));    // [7, -8]
console.log(findMaxMin([-1, 0, 1]));              // [1, -1]



