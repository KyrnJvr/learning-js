import { reverseString } from './reverseString.js';

function isPalindrome(s){

    // let reversed = s.split("").reverse().join("").toLowerCase();

    let reversed = reverseString(s);

    return s === reversed;

}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false