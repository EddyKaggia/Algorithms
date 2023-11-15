/*


We are working on a security system for a badged-access room in our company's building.

Given an ordered list of employees who used their badge to enter or exit the room, write a function that returns two collections:

1. All employees who didn't use their badge while exiting the room - they recorded an enter without a matching exit. (All employees are required to leave the room before the log ends.)

2. All employees who didn't use their badge while entering the room - they recorded an exit without a matching enter. (The room is empty when the log begins.)

Each collection should contain no duplicates, regardless of how many times a given employee matches the criteria for belonging to it.

records1 = [
  ["Paul",     "enter"],
  ["Pauline",  "exit"],
  ["Paul",     "enter"],
  ["Paul",     "exit"],
  ["Martha",   "exit"],
  ["Joe",      "enter"],
  ["Martha",   "enter"],
  ["Steve",    "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "enter"],
  ["Joe",      "enter"],
  ["Curtis",   "exit"],
  ["Curtis",   "enter"],
  ["Joe",      "exit"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "exit"],
  ["Joe",      "enter"],
  ["Joe",      "enter"],
  ["Martha",   "exit"],
  ["Joe",      "exit"],
  ["Joe",      "exit"] 
]

Expected output: ["Steve", "Curtis", "Paul", "Joe"], ["Martha", "Pauline", "Curtis", "Joe"]

Other test cases:

records2 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
]

Expected output: [], []

records3 = [
  ["Paul", "enter"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
]

Expected output: ["Paul"], ["Paul"]

records4 = [
  ["Raj", "enter"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
  ["Paul", "enter"],
  ["Raj", "enter"],
]

Expected output: ["Raj", "Paul"], ["Paul"]

All Test Cases:
mismatches(records1) => ["Steve", "Curtis", "Paul", "Joe"], ["Martha", "Pauline", "Curtis", "Joe"]
mismatches(records2) => [], []
mismatches(records3) => ["Paul"], ["Paul"]
mismatches(records4) => ["Raj", "Paul"], ["Paul"]

n: length of the badge records array
*/
const incorrectBadgeUsage = (arr) => {
  const statusMap = new Map();
  const wrongExit = [];
  const wrongEntry = [];

  for (const [visitor, status] of arr) {
    if (!statusMap.has(visitor)) {
      statusMap.set(visitor, [status]);
    } else {
      statusMap.get(visitor).push(status);
    }
  }

  for (const [key, value] of statusMap) {
    for (let i = 0; i < value.length; i++) {
      if (value[i] === "enter") {
        if (
          value[0] === "enter" ||
          value[i] === value[i - 1] ||
          value[i] === value[i + 1]
        ) {
          wrongExit.push(key);
        }
      }
    }

    for (let i = 0; i < value.length; i++) {
      if (value[i] === "exit") {
        if (
          value[0] === "exit" ||
          value[i] === value[i - 1] ||
          value[i] === value[i + 1]
        ) {
          wrongEntry.push(key);
        }
      }
    }
  }

  return [wrongExit, wrongEntry];
};

const records1 = [
  ["Paul", "enter"],
  ["Pauline", "exit"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Martha", "exit"],
  ["Joe", "enter"],
  ["Martha", "enter"],
  ["Steve", "enter"],
  ["Martha", "exit"],
  ["Jennifer", "enter"],
  ["Joe", "enter"],
  ["Curtis", "exit"],
  ["Curtis", "enter"],
  ["Joe", "exit"],
  ["Martha", "enter"],
  ["Martha", "exit"],
  ["Jennifer", "exit"],
  ["Joe", "enter"],
  ["Joe", "enter"],
  ["Martha", "exit"],
  ["Joe", "exit"],
  ["Joe", "exit"],
];

console.log(incorrectBadgeUsage(records1));

const records2 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
];

const records3 = [
  ["Paul", "enter"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
];

const records4 = [
  ["Raj", "enter"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
  ["Paul", "enter"],
  ["Raj", "enter"],
];

const stillInBuilding = (arr) => {
  const entry = new Map();
  const output = [];

  for (const [visitor, status] of arr) {
    if (!entry.has(visitor)) {
      entry.set(visitor, [status]);
    } else {
      entry.get(visitor).push(status);
    }
  }

  for (const [key, value] of entry) {
    if (value[value.length - 1] === "enter") {
      output.push(key);
    }
  }

  return output;
};

const uniqueVisitor = (arr) => {
  const unique = new Set();

  for (const [visitor, entryExit] of arr) {
    if (!unique.has(visitor)) {
      unique.add(visitor);
    }
  }

  return unique;
};

const name_order = (arr, str) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return i;
    }
  }
};
