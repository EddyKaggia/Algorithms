// Declare a function "rotationSequence", which takes a callback as the first argument and an unspecified number of subsequent arguments. It should return a function, which also takes an unspecified number of arguments.
// The returned function may only be invoked with arguments that were passed into the outer function, and furthermore, those arguments must be inserted in the *same order*. 
// On subsequent invocations, it should keep track of where in it left off, and only accept the next item in the sequence as the first passed-in argument.
// If it is invoked correctly, it should return an array containing the results of running the callback on all the passed-in arguments. If not, return the string "invalid input".

// Example:
// const multiplyBy2 = (num) => num * 2;
// const zeroToTwenty = rotationSequence(multiplyBy2, 0, 5, 10, 15, 20);
// zeroToTwenty(0, 5, 10) // -> [0, 10, 20]
// zeroToTwenty(20) // -> 'invalid input'
// zeroToTwenty(15, 20, 0, 5) // -> [30, 40, 0, 10]
// zeroToTwenty(10, 15, 20, 0, 5, 10, 15, 20, 0) // => [20, 30, 40, 0, 10, 30, 40, 0]

function rotationSequence(callback, ...args) {
let counter = 0;
return function (...args2){
    if (counter >= args.length) {
        counter = 0;
        console.log(...args);
    }
    counter++;
    
};
};

const multiplyBy2 = (num) => num * 2;
const zeroToTwenty = rotationSequence(multiplyBy2, 0, 5, 10, 15, 20);
console.log(zeroToTwenty(0, 5, 10)) // -> [0, 10, 20]
// zeroToTwenty(20) // -> 'invalid input'
// zeroToTwenty(15, 20, 0, 5) // -> [30, 40, 0, 10]
// zeroToTwenty(10, 15, 20, 0, 5, 10, 15, 20, 0) // => [20, 30, 40, 0, 10, 30, 40, 0]