/**
 * 删除问题的延伸——dummy 结点登场
 * 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

  示例 1:
  输入: 1->2->3->3->4->4->5
  输出: 1->2->5
  示例 2:
  输入: 1->1->1->2->3
  输出: 2->3
 */

class ListNode{
  val: number | string | null
  next: null | ListNode
  constructor(val){
    this.val = val
    this.next = null
  }
}

function dummyListNode(list){
  let dummy = new ListNode('dummy') // 设置一个dummy节点，防止找不到第一个节点的位置
  dummy.next = list 
  let cur = dummy
  while(cur.next && cur.next.next){
    if(cur.next.val === cur.next.next.val){ // 如果存在重复节点，则继续遍历删除，直到不存在重复节点
      let temp = cur.next.val
      while(cur.next && cur.next.val === temp){
        cur.next = cur.next.next
      }
    }else{ // 如果不存在重复节点，则直接移动到下一个节点
      cur = cur.next
    }
  }
  return dummy.next;
}

const list = new ListNode(1)
list.next = new ListNode(3)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(3)
list.next.next.next.next = new ListNode(4)
list.next.next.next.next.next = new ListNode(6)
list.next.next.next.next.next.next = new ListNode(6)

console.log('list',list)
console.log(dummyListNode(list))