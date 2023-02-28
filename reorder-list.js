// "Given a singly linked list: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example 1:

// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:

// Given 1->2->3->4->5, reorder it to 1->5->2->4->3."		

function reorderList(head) {
    if (!head || !head.next) {
      return;
    }
  
    // Step 1: Find the middle of the linked list.
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Step 2: Reverse the second half of the linked list.
    let prev = null;
    let curr = slow.next;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    slow.next = null;
    let l1 = head;
    let l2 = prev;
  
    // Step 3: Merge the first half of the linked list with the reversed second half.
    while (l2) {
      let next1 = l1.next;
      let next2 = l2.next;
      l1.next = l2;
      l2.next = next1;
      l1 = next1;
      l2 = next2;
    }
  }
  