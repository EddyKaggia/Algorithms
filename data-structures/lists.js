//Lists are abstract data types

const e = require("express");
const { modelNames } = require("mongoose");

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    // this.clear = clear;
    this.find = find;
    this.toString = toString;
    // this.insert = insert;
    this.append = append;
    this.remove = remove;
    // this.front = front;
    // this.end = end;
    // this.prev = prev;
    // this.next = next;
    this.length = length;
    // this.currPos = currPos;
    this.moveTo = moveTo;
    // this.getElement = getElement;
    this.length = length;
    // this.contains = contains;
}

//Append: function append()
function append(element) {
    //Assign element to value of listSize and then increment listSize
    this.dataStore[this.listSize++] = element;
}

//Find:
function find(element) {
    //Iterate through list and find element
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            //return position of element
            return i;
        }
    }
    //If the element not found return -1
    return -1;
}

//Remove: an element from a list remove() 
//The remove() function uses the position returned by find() to splice the dataStore array at that place 

function remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

//Length: Determine the number of elements in the list
function length() {
    return this.listSize;
}

//toString: Retrieving a List's Elements
function toString() {
    return this.dataStore;
}

const names = new List();
names.append('Ryan');
names.append('Katie');
names.append('Matthew');

console.log(names);
console.log(names.toString())