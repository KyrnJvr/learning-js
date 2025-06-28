// challenge 16: Write a function to check if an object is empty.

const obj = {
    // property1: "test"
};

function isEmpty(object) {
    return Object.keys(object).length === 0 && object.constructor === Object;
}

console.log(isEmpty(obj)); // true