/**
 * 链表的合并
 * 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。 

  示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
 */

class ListNode{
  val: number | string | null
  next: null | ListNode
  constructor(val){
    this.val = val
    this.next = null
  }
}

function mergeListNode(l1,l2){
  let head = new ListNode('head')
  let cur = head
  while(l1 && l2){
    if(l1.val >= l2.val){
      cur.next = l2
      l2 = l2.next
    }else{
      cur.next = l1
      l1 = l1.next
    }
    cur = cur.next as ListNode
  }
  if(l1){
    cur.next = l1
  }
  if(l2){
    cur.next = l2
  }
  return head.next
}

const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)
const l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(5)
l2.next.next.next = new ListNode(6)
console.log('l1',l1)
console.log('l2',l2)
console.log(mergeListNode(l1,l2))