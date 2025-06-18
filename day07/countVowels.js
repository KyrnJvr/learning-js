function countVowels(s){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lowered = s.toLowerCase();
    let count = 0;

    for(let char of lowered){
        if(vowels.includes(char)){
            count+=1;
        }
    }
    return count;
}

console.log(countVowels("hello"));
console.log(countVowels("world"));