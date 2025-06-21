// challenge 14: remove duplicates in an array

// function removeDups(a){
//     let noDups = [];

//     for(let number of a){
//         if(noDups.includes(number)){
//             continue;
//         } else {
//             noDups.push(number);
//         }
//     }

//     return noDups;
// }

// using set and the spread operator

function newRemoveDups(a){
    return [...new Set(a)];
}



console.log(newRemoveDups([1, 1, 2, 3, 4]));             // Expected: [1, 2, 3, 4]
console.log(newRemoveDups([5, 5, 5, 5, 5]));             // Expected: [5]
console.log(newRemoveDups([1, 2, 3, 4, 5]));             // Expected: [1, 2, 3, 4, 5]
console.log(newRemoveDups([2, 3, 2, 1, 3, 4, 1]));       // Expected: [2, 3, 1, 4]
console.log(newRemoveDups([]));                         // Expected: []
console.log(newRemoveDups(["a", "b", "a", "c", "b"]));   // Expected: ["a", "b", "c"]
console.log(newRemoveDups([true, false, true, true]));  // Expected: [true, false]
console.log(newRemoveDups([null, null, undefined]));    // Expected: [null, undefined]


