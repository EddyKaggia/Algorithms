/*
You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.
*/

const mergeNodes = (head) => {
  //variable to keep sum of nodes between consecutive 0s
  let sum = 0;

  //Initialize a pointer to start iterating from head of LL
  let pointer = head;
  //Initialize next pointer to start iterating from next node after head of LL
  let nextPointer = head.next;

  //Iterate through LL
  while (nextPointer) {
    if (nextPointer.val === 0) {
      nextPointer.val = sum;
      sum = 0;
      pointer.next = nextPointer;
      pointer = pointer.next;
    } else {
      sum += nextPointer.val;
    }

    nextPointer = nextPointer.next;
  }

  return head.next;
};
