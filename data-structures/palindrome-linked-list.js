/*
Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
*/

const isPalindrome = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  fast = head;

  slow = reverse(slow);

  while (slow) {
    if (fast.val !== slow.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }

  return true;
};

function reverse(root) {
  let prev = null;

  while (root) {
    let ref = root.next;
    root.next = prev;
    prev = root;
    root = ref;
  }

  return prev;
}
