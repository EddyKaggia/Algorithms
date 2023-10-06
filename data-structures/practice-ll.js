// Linked List constructor
const LL = function () {
    this.length = 0;
    this.head = null;
}

// Node constructor
const Node = function(value) {
    this.value = value;
    this.next = null;
}

// Add method with sorting
LL.prototype.add = function(value) {
    //Create the new node
    const newNode = new Node(value);

    // If head is null
    if(this.head === null) {
        this.head = newNode;
        this.length++;
        return;
    }

    let currentNode = this.head;

    //If new node should be at the beginning
    if (value < currentNode.value) {
        newNode.next = currentNode;
        this.head = newNode;
        return;
    }

    while (currentNode.next && currentNode.next.value < value) {
        currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
}

LL.prototype.delete = function(value) {
    //Iterate from the head
    let currentNode = this.head;
    let previousNode = null;

    //If there is no head
    if (!currentNode) return undefined;

    if (currentNode.value === value) {
        this.head = currentNode.next;
        this.length--;
        return value;
    }

    while (currentNode.next) {
        if (currentNode.next.value === value) {
            currentNode.next = currentNode.next.next
            this.length--;
            return value;
        }

        currentNode = currentNode.next;
    }
    return undefined;
}

LL.prototype.reverse = function(LL) {
    let prev = null;
    let current = this.head;
    
    while (current !== null) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}

const newLL = new LL();
newLL.add("A");
console.log(newLL.add("F"));
newLL.add("B");
newLL.add("C");
newLL.add("E");
newLL.add("D");
// newLL.delete("C")
// newLL.delete("F")

console.log(newLL.reverse());