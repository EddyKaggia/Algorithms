/*
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
*/

var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }

    const poppedElement = this.queue1.shift();

    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return poppedElement;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
        // // Move all elements from queue1 to queue2 except the last one
        // while (this.queue1.length > 1) {
        //     this.queue2.push(this.queue1.shift());
        // }
    
        // // Get the last element from queue1 (simulating stack behavior)
        // const topElement = this.queue1[0];
    
        // // Move it to queue2
        // this.queue2.push(this.queue1.shift());
    
        // // Swap the names of queue1 and queue2 to keep queue2 empty
        // [this.queue1, this.queue2] = [this.queue2, this.queue1];
    
        // return topElement;

        return this.queue1[this.queue1.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0;
};

const newStack = new MyStack();
newStack.push("A");
newStack.push("B");
newStack.push("C");
newStack.push("D");
newStack.push("E");
console.log(newStack.top());

console.log(newStack);