/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

const rotateNumsByK = (nums, k) => {
    // const num = [];
    for (let i = nums.length - 1; i > nums.length - 1 - k ; i--) {
        nums.unshift(nums[i]);
        console.log(i);
    }
    // nums.push(...nums.slice(0, nums.length - k));
    return nums.slice(0, nums.length - k);
    return nums;
}

// const rotateNumsByK2 = (nums, k)

console.log(rotateNumsByK([1,2,3,4,5,6,7], 3)); //[5,6,7,1,2,3,4]
// console.log(rotateNumsByK([-1,-100,3,99], 2)); //[3,99,-1,-100]

// function rotate(nums, k) {
//     k %= nums.length
  
//     nums.reverse() //[1,2,3,4,5,6,7] [7,6,5,4,3,2,1]
//     let numSlice = nums.slice(0,k).reverse() // [5.6,7,4,3,2,1]
//     nums.slice(k).reverse() //[5,6,7,1,2,3,4]
//     console.log(nums)
//   }

  function rotate(nums, k) {
    for (let i = nums.length - 1; i > nums.length - 1 - k; i--) {
        let poppedEntry = nums.pop();
        nums.unshift(poppedEntry);
    }
    return nums;
}

  console.log(rotate([1,2,3,4,5,6,7], 3))// [5,6,7,1,2,3,4]