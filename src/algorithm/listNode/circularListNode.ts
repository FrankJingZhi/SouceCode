/**
 * 环形链表基本问题——如何判断链表是否成环？
 * 真题描述：给定一个链表，判断链表中是否有环。

  示例 1：
  输入：[3,2,0,4]（链表结构如下图） 输出：true
  解释：链表中存在一个环
 */

class ListNode{
  val: any
  next: any
  constructor(val){
    this.val = val
    this.next = null
  }
}

function circularListNode(list){
  while(list){
    if(list.flag){
      return true
    }else{
      list.flag = true
      list = list.next
    }
  }
  return false
}

const list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
list.next.next.next.next = new ListNode(5)
list.next.next.next.next.next = new ListNode(6)
list.next.next.next.next.next.next = list

console.log(circularListNode(list))