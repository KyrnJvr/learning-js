export function reverseString(s){
    // using in built functions
    // return s.split("").reverse().join("").toLowerCase();

    // without in built methods
    let reversed=  "";
    for (let i=  s.length - 1; i>=0; i--){
        reversed += s[i];
    }
    return reversed;
}

// console.log(reverseString("JavaScript"));
// console.log(reverseString("hello"));