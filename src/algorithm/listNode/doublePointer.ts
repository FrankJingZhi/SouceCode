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

/**
 * 1.求长度
 * 2.做减法，找定位。
 */
function doublePointers1(list, n){
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

console.log(doublePointers1(list, 1))
console.log(doublePointers1(list, 3))
console.log(doublePointers1(list, 5))

/**
 * 快慢指针
 */
function doublePointers2(list, n){
  let dummy = new ListNode('head')
  dummy.next = list
  let fast = list
  let slow = list
  while(n!==0){
    fast = fast.next
    n--
  }
  while(fast){
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
}

const list2 = new ListNode(1)
list2.next = new ListNode(2)
list2.next.next = new ListNode(3)
list2.next.next.next = new ListNode(4)
list2.next.next.next.next = new ListNode(5)
list2.next.next.next.next.next = new ListNode(6)
list2.next.next.next.next.next.next = new ListNode(7)

console.log(doublePointers1(list2, 1))
console.log(doublePointers1(list2, 3))
console.log(doublePointers1(list2, 5))