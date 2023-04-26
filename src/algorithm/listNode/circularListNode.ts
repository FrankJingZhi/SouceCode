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


/**
 * 环形链表衍生问题——定位环的起点
 * 
 * 真题描述：给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。

    示例 1：
    输入：head = [3,2,0,-4]（如下图） 输出：tail connects to node index 1 解释：链表中有一个环，其尾部连接到第二个结点。
 */

function startCircularListNode(list){
  let head = list
  let temp,
      index = 0
  while(list){
      if(list.flag){
          temp = list
          break
      }else{
          list.flag = true
          list = list.next
      }
  }
  if(temp){
      while(head){
          if(head === temp){
              return index
          }else{
              index++
              head = head.next
          }
      }
  }else{
      return false
  }
}

const list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(3)
list1.next.next.next = new ListNode(4)
list1.next.next.next.next = new ListNode(5)
list1.next.next.next.next.next = new ListNode(6)
list1.next.next.next.next.next.next = list1

console.log(startCircularListNode(list1))