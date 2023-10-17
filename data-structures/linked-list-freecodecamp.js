/*
WORKING WITH NODES IN LINKED LISTS

Another common data structure you'll run into in computer science is the linked list. A linked list is a linear collection of data elements, called 'nodes', each of which points to the next. Each node in a linked list contains two key pieces of information: the element itself, and a reference to the next node.

Imagine that you are in a conga line. You have your hands on the next person in the line, and the person behind you has their hands on you. You can see the person straight ahead of you, but they are blocking the view of the other people ahead in line. A node is just like a person in a conga line: they know who they are and they can only see the next person in line, but they are not aware of the other people ahead or behind them.

In our code editor, we've created two nodes, Kitten and Puppy, and we've manually connected the Kitten node to the Puppy node.

Create a Cat and Dog node and manually add them to the line.
*/

const Node = function (element) {
  this.element = element;
  this.next = null;
};
const Kitten = new Node("Kitten");
const Puppy = new Node("Puppy");

Kitten.next = Puppy;
// Only change code below this line
const Cat = new Node("Cat");
const Dog = new Node("Dog");

Puppy.next = Cat;
Cat.next = Dog;

/*
CREATE A LINKED LIST CLASS

Let's create a linked list class. Every linked list should start out with a few basic properties: a head (the first item in your list) and a length (number of items in your list). Sometimes you'll see implementations of linked lists that incorporate a tail for the last element of the list, but for now we'll just stick with these two. Whenever we add an element to the linked list, our length property should be incremented by one.

We'll want to have a way to add items to our linked list, so the first method we'll want to create is the add method.

If our list is empty, adding an element to our linked list is straightforward enough: we just wrap that element in a Node class, and we assign that node to the head of our linked list.

But what if our list already has one or more members? How do we add an element to the list? Recall that each node in a linked list has a next property. To add a node to the list, find the last node in the list, and point that last node's next property at our new node. (Hint: you know you've reached the end of a linked list when a node's next property is null.)

Write an add method that assigns the first node you push to the linked list to the head; after that, whenever adding a node, every node should be referenced by the previous node's next property.

Note

Your list's length should increase by one every time an element is added to the linked list.
*/

function LinkedList() {
  const length = 0;
  const head = null;

  const Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    // Only change code below this line
    const node = new Node(element);
    if (head) {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    } else {
      head = node;
    }
    length++;
    // Only change code above this line
  };

  this.remove = function (element) {
    // Only change code below this line
    const currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
    // Only change code above this line
  };

  this.isEmpty = function () {
    return this.size() > 0 ? false : true;
  };

  this.indexOf = function (el) {
    let currentNode = head,
      index = -1,
      indexFound = false;

    while (!indexFound && currentNode) {
      index++;
      if (currentNode.element === el) {
        indexFound = true;
      }
      currentNode = currentNode.next;
    }

    return indexFound ? index : -1;
  };

  this.elementAt = function (i) {
    let currentNode = head,
      currentElement,
      index = -1,
      indexReached = false;

    while (!indexReached && currentNode) {
      index++;
      currentElement = currentNode.element;
      if (index === i) {
        indexReached = true;
      }
      currentNode = currentNode.next;
    }

    return indexReached ? currentElement : undefined;
  };

  // Only change code below this line
  this.removeAt = function (index) {
    // Exit early on bad input
    if (index < 0 || index >= length) {
      return null;
    }

    // Find deleted node and remove
    let deletedNode = head;
    if (index == 0) {
      head = null;
    } else {
      let currentNode = head;
      let currentIndex = 0;
      while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      deletedNode = currentNode.next;
      currentNode.next = deletedNode.next;
    }

    // Update and return
    length--;
    return deletedNode.element;
  };
  // Only change code above this line

  // Only change code below this line
  this.addAt = (index, element) => {
    if (index < 0 || index >= length) {
      return false;
    }

    let node = head;
    if (index > 0) {
      let i = 0;
      while (i + 1 !== index) {
        node = node.next;
        i++;
      }
    }

    const newNode = new Node(element);
    newNode.next = node.next;

    if (index === 0) {
      head = newNode;
    } else {
      node.next = newNode;
    }

    length++;
  };
  // Only change code above this line
}
