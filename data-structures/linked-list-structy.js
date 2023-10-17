const Node = function (val) {
  this.val = val;
  this.next = null;
};

const reverseList = (head) => {
  // todo
  // let current = head;
  let prev = null;

  while (head !== null) {
    const temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(reverseList(a));
console.log(f);
