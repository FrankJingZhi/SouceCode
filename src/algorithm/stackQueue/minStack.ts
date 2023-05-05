/**
 * 栈的设计——“最小栈”问题
 * 
 * 题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

  push(x) —— 将元素 x 推入栈中。
  pop() —— 删除栈顶的元素。
  top() —— 获取栈顶元素。
  getMin() —— 检索栈中的最小元素。

  示例:
  MinStack minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.getMin(); --> 返回 -3.
  minStack.pop();
  minStack.top(); --> 返回 0.
  minStack.getMin(); --> 返回 -2.
 */

class MinStack{
  values: Record<string, number>;
  constructor(){
    this.values = {}
  }
  push(value){
    const keys = Object.keys(this.values)
    if(keys.length === 0){
      this.values[0] = value
    }
    this.values[keys.length] = value;
    return this.values
  }
  pop(){
    const keys = Object.keys(this.values)
    if(keys.length === 0){
      return this.values
    }
    delete this.values[keys[keys.length - 1]]
    return this.values
  }
  top(){
    const values = Object.values(this.values)
    return values[values.length - 1]
  }
  getMin(){
    return Math.min(...Object.values(this.values))
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log('1',minStack.getMin()); // --> 返回 -3.
minStack.pop();
console.log('2',minStack.top()); // --> 返回 0.
console.log('3',minStack.getMin()); // --> 返回 -2.

class MinStack2 {
  values: number[];
  stack: number[];
  constructor() {
    this.values = []
    this.stack = []
  }
  push(value: number) {
    this.values.push(value)
    const len = this.stack.length;
    if(len === 0 || this.stack[len - 1] >= value){
      this.stack.push(value)
    }
  }
  pop() {
    const value = this.values.pop()
    const len = this.stack.length;
    if(value !== undefined && this.stack[len - 1] === value){
      this.stack.pop()
    }
  }
  top(){
    return this.values[this.values.length - 1]
  }
  getMin(){
    return this.stack[this.stack.length - 1]
  }
}

const minStack2 = new MinStack2();
minStack2.push(-2);
minStack2.push(0);
minStack2.push(-3);
console.log('1',minStack2.getMin()); // --> 返回 -3.
minStack2.pop();
console.log('2',minStack2.top()); // --> 返回 0.
console.log('3',minStack2.getMin()); // --> 返回 -2.