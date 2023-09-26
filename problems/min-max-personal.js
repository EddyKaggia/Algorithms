//input: array
//output: array of minimum value & maximum value

const minMax = (nums) => {
    let min = Infinity;
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        if(min > nums[i]) min = nums[i];
        if(max < nums[i]) max = nums[i];
    }
    return [min, max];
};

const numbers = [-100, -199, 99, 67, 34, 189, 4, 8, 9, 25, 2000];
console.log(minMax(numbers)); // [4, 189]

const object = {
    Carla: 3,
    Rhonda: 7,
    Marla: 90,
    Nala: 78,
    Nala: 25,
    Nala: 67
}

console.log(object["Nala"])