/**
 * 快慢指针——删除链表的倒数第 N 个结点
 * 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

  示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
  当删除了倒数第二个结点后，链表变为 1->2->3->5.
  说明： 给定的 n 保证是有效的。
 */

class ListNode{
  val: number | string | null
  next: null | ListNode
  constructor(val){
    this.val = val
    this.next = null
  }
}

function doublePointers(list, n){
  let dummy = new ListNode('dummy')
  dummy.next = list
  let len = 0
  let count = 0
  let index = 0
  while(list){
    len++;
    list = list.next
  }
  index = len - n + 1
  list = dummy.next
  while(list && list.next){
    count++
    if(count+1 === index){
      list.next = list.next.next
      break
    }
    list = list.next
  }
  return dummy.next
}

const list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
list.next.next.next.next = new ListNode(5)
list.next.next.next.next.next = new ListNode(6)
list.next.next.next.next.next.next = new ListNode(7)

console.log(doublePointers(list, 1))
console.log(doublePointers(list, 3))
console.log(doublePointers(list, 5))