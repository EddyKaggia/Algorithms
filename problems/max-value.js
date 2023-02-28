// max value
// Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

// Solve this without using any built-in array methods.

// You can assume that the array is non-empty.

const maxValue = (nums) => {
    //Use a variable to represent largest value you have seen so far
    //Use the arbitrarily smallest vale i.e -Infinity, because all other values will be larger
    //Also even negative numbers are larger than -infinity
    let max = -Infinity;
    
    //Loop through all elements of array and set first value as new max and keep comparing until no values are larger than max
    for(const num of nums){
      if(num > max){
        max = num;
      }
    }
    return max;

    //Complexity
    //n = array length
    //Time: 0(n) as we are just looping over the array
    //Space: 0(1)as we are only storing and tracking one number -> max
  };
  console.log(maxValue([4, 7, 2, 8, 10, 9]))