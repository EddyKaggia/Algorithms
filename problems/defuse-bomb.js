/*
You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

 

Example 1:

Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.
Example 2:

Input: code = [1,2,3,4], k = 0
Output: [0,0,0,0]
Explanation: When k is zero, the numbers are replaced by 0. 
Example 3:

Input: code = [2,4,9,3], k = -2
Output: [12,5,6,13]
Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.
*/

//Input: Array, key
//Output: Array
//Tip: if k is not 0 we wrap around in the array

const decrypt = (nums, key) => {
    //If key > 0
    function caseOne (arr, k) {
        let sumOfK = 0;
        let result = [];
    
        for (let i = 0; i < k; i++) {
            sumOfK += arr[i];
        }
    
        for (let i = 0; i < arr.length; i++) {
            sumOfK -= arr[i];
            sumOfK += arr[(i + k) % arr.length];
            result.push(sumOfK);
        }
        return result;
    }
    
    //if key < 0
    function caseTwo (arr, k) {
        return caseOne(arr.reverse(), -k).reverse();
    }
    
    if (key > 0) return caseOne (nums, key);

    return caseTwo(nums, key);
}



console.log(decrypt([5,7,1,4], 3)); // [12,10,16,13]
console.log(decrypt([1,2,3,4], 0)); // [0,0,0,0]
console.log(decrypt([2,4,9,3], -2)); // [12,5,6,13]
