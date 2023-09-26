// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//Solution 1
// let isAnagram = function(s, t) {
//     const sSorted = s.split("").sort().join("");
//     const tSorted = t.split("").sort().join("");
//     return sSorted === tSorted;

//     //time complexity NlogN + MlogM
// };

//Solution 2
// let isAnagram = function(s, t) {
//     //if the lengths of the two strings are not equal return false
//     if(s.length !== t.length) return false;

//     //define frequency tables
//     const sCount = {};
//     const tCount = {};
//     const N = s.length;

//     //iterate over the
//     for(let i = 0; i< N; i++){
//         if (!sCount[s[i]]) sCount[s[i]] = 0;
//         if (!tCount[t[i]]) tCount[t[i]] = 0;
//         sCount[s[i]]++;
//         tCount[t[i]]++;
//     }
//    for (let ch in sCount) {
//     if(sCount[ch] !== tCount[ch]) return false;
//    }
//    return true;
//    //Linear time complexity 0(n)
// };

//Solution 3 (Optimize solution 2)
//input: 2 strings
//output: boolean
let isAnagram = function(s, t) {
    //If the two inputs don't have the same length return false
    if(s.length !== t.length) return false;

    //Storage object
    const count = {};

    //iterate over the 2 input strings and add their characters to the storage object
    for(let i = 0; i< s.length; i++){
        if (!count[s[i]]) count[s[i]] = 0;
        if (!count[t[i]]) count[t[i]] = 0;
        count[s[i]]++;
        count[t[i]]--;
        console.log(count);

    }

    //Check if any of the properties has a value greater than 0
   for (let char in count) {
    if(count[char] !== 0) return false;
   }
   return true;

   //time complexity constant 0(1)
}

// let isAnagram = function(s, t) {
//     if(s.length !== t.length) return false;

// };
let s = "rat", t = "car";
console.log(isAnagram(s, t));