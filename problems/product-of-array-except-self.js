// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

//Edge cases:
//1. If there is more than one zero in input array, then all numbers in output will be zero -> filter out the zeroes
//2. If there is only one zero in input array, then all numbers in output array except at the index of zero
//3. If there are no zeros
//Division method -> time complexity is linear O(n)
//         -> To count zeros space complexity will be O(n)

//Kind of like a greedy approach
//2 auxillary arrays to hold all product-sums one side and products to the other side of index
var productExceptSelf = function(nums) { 

    const left = new Array(nums.length).fill(0);
    left[0] = 1;
    const right = new Array(nums.length).fill(0);
    right[right.length - 1] = 1;

    for(let i = 1; i < nums.length; i++){
        left[i] = left[i - 1] * nums[i - 1]; 
    }

    for(let i = right.length - 2; i >= 0; i--){
        right[i] = right[i + 1] * nums[i + 1];
    }

    for(let i =0; i < nums.length; i++){
        nums[i] = left[i] * right[i];
    }
    return nums;
};

//O(n): T
//O(n):S