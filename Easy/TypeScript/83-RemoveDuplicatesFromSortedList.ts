/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let temp = head;
  let prev = head;

  while (temp && temp.next) {
    temp = temp.next;
    if (prev?.val === temp.val) {
      prev.next = temp.next;
    } else {
      // move prev pointer to current temp node
      prev = temp;
    }
  }

  return head;
}
