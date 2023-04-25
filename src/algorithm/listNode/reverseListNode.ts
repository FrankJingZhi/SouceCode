/**
 * 多指针法——链表的反转
 * 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

  示例:
  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL
 */

class ListNode{
  val: any
  next: any
  constructor(val){
    this.val = val
    this.next = null
  }
}
  
function reverseListNode(list){
  let pre = null
  let cur = list
  while(cur){
    let next = list.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return cur
}

const list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
list.next.next.next.next = new ListNode(5)
list.next.next.next.next.next = new ListNode(6)
list.next.next.next.next.next.next = new ListNode(7)

console.log(reverseListNode(list))


/**
 * 局部反转一个链表
 * 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

    说明: 1 ≤ m ≤ n ≤ 链表长度。

    示例:
    输入: 1->2->3->4->5->NULL, m = 2, n = 4
    输出: 1->4->3->2->5->NULL
 */

function reversePartialListNode(list, m, n){
  let dummy = new ListNode('head')
  dummy.next = list
  let point = dummy

  for(let i=0;i<m-1;i++){
    point = point.next
  }

  let leftHead = point
  let start = point.next
  let pre = start
  let cur = pre.next

  for(let i=m;i<n;i++){
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  leftHead.next = pre
  start.next = cur
  return dummy.next
}

var list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);
list1.next.next.next.next.next = new ListNode(6);
list1.next.next.next.next.next.next = new ListNode(7);
console.log(reversePartialListNode(list1, 2, 4));