/**
 * 链表结点的删除
 * 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

  示例 1:
  输入: 1->1->2
  输出: 1->2
  示例 2:
  输入: 1->1->2->3->3
  输出: 1->2->3
 */

class ListNode{
  val: number | string | null
  next: null | ListNode
  constructor(val){
    this.val = val
    this.next = null
  }
}

function deleteListNode1(list){
  const head = new ListNode('head')
  head.next = list
  while (list) {
    if (list.next && list.val === list.next.val) {
      if (list.next.next) {
        list.next = list.next.next;
      }
      else {
        list.next = null;
        list = list.next
      }
    }else{
      list = list.next
    }
}
  return head.next
}

const list1 = new ListNode(1)
list1.next = new ListNode(1)
list1.next.next = new ListNode(3)
list1.next.next.next = new ListNode(3)
list1.next.next.next.next = new ListNode(3)
list1.next.next.next.next.next = new ListNode(4)
list1.next.next.next.next.next.next = new ListNode(6)
list1.next.next.next.next.next.next.next = new ListNode(6)

console.log('list1',list1)
console.log(deleteListNode1(list1))

function deleteListNode2(list){
  let cur = list
  while(cur != null && cur.next != null){
    if(cur.val === cur.next.val){
      cur.next = cur.next.next
    }else{
      cur = cur.next
    }
  }
  return list
}

const list2 = new ListNode(1)
list2.next = new ListNode(1)
list2.next.next = new ListNode(3)
list2.next.next.next = new ListNode(3)
list2.next.next.next.next = new ListNode(3)
list2.next.next.next.next.next = new ListNode(4)
list2.next.next.next.next.next.next = new ListNode(6)
list2.next.next.next.next.next.next.next = new ListNode(6)

console.log('list2',list2)
console.log(deleteListNode2(list2))