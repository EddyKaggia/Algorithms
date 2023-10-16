/*
Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.
*/

const fiveSort = (arr) => {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (arr[j] === 5) {
            j--;
        } else if (arr[i] === 5) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        } else {
            i++;
        }
    }

    return arr;
}


console.log(fiveSort([12, 5, 1, 5, 12, 7]));
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]));
console.log(fiveSort([5, 5, 6, 5, 5, 5, 5]));
console.log(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]));