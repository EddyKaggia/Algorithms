// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var groupAnagrams = function(strs) {
    const sortedStrs = strs.map(word => word.split('').sort().join(''));
    const hash = {};

    for (let i = 0; i < strs.length; i++) {
        if(!hash[sortedStrs[i]]) {
            hash[sortedStrs[i]] = [strs[i]];
    } else {
        hash[sortedStrs[i]].push(strs[i]);
    }
}
return Object.values(hash);
//Time complexity: O(n x nlogn)
//Space complexity: O(n)
};