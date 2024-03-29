/**
 * 用栈实现一个队列
 * 题目描述：使用栈实现队列的下列操作：
  push(x) -- 将一个元素放入队列的尾部。
  pop() -- 从队列首部移除元素。
  peek() -- 返回队列首部的元素。
  empty() -- 返回队列是否为空。

  示例: MyQueue queue = new MyQueue();
  queue.push(1);
  queue.push(2);
  queue.peek(); // 返回 1
  queue.pop(); // 返回 1
  queue.empty(); // 返回 false
 */

class Queue {
  stack1: number[];
  stack2: number[];
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }
  push(value:number){
    this.stack1.push(value)
  }
  pop(){

  }
  peek(){

  }
  empty(){
    
  }
}