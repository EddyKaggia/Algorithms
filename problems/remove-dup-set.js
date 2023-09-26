function removeDup (arr) {
    const output = [];

    const aux = new Set ();

    for(let element of arr) {
        if(!aux.has(element)) {
            aux.add(element);
            output.push(element);
        }
    }

    return output;
}

const removeDup2 = (arr) => {
    const aux = new Set(arr);
    return Array.from(aux);
}

console.log(removeDup2([2,3,9]));

function union(...arrays) {
    const unique = new Set();
    for(let array of arrays) {
        for (let element of array) {
            unique.add(element);
        }
    } 

    return [...unique];
}

console.log(union([1,3,7], [2,3,9], [3,13])); // -> [1,3,7,2,9,13]