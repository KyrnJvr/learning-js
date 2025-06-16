function factorial(n){

    if (n === 0){
        return 1;
    } else if(n < 0){
        return 'error';
    }

    let results = 1;
    for (let i = n; i>= 1; i--){
        results *= i ;
        // console.log(i, results);
    }
    return results;
}

console.log(factorial(5));
console.log(factorial(0)); // Should return 1
console.log(factorial(-3)); // Should return undefined or error
