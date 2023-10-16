/*
Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.

uncompress("2c3a1t"); // -> 'ccaaat'
uncompress("4s2b"); // -> 'ssssbb'
*/

const uncompress = (s) => {
    let result = '';
    let num = '';
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            num += s[i];
        } else {
            while (num) {
                result += s[i];
                num--;
            }
        }
    }

    return result;
}

console.log(uncompress("2c3a1t"));
// console.log(uncompress("4s2b"));
console.log(uncompress("3n12e2z"))