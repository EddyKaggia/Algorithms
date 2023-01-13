// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let containsDuplicate = function(nums) {
    const hTable = {};

    //Iterate over the array
    for(let i = 0; i< nums.length; i++) {
        if(nums[i] in hTable) return true;
        hTable[nums[i]] = 1;
    }
    return false;

    //Space: 0(n) scale linearly as array grows due to more elemnts in array
    //time complexity: 0(n) due to numbr of elements in array
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
