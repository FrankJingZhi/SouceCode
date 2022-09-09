/**
 * 手写call
 * promise1：context，需要重定向的上下文
 * promise2：args1, args2...
 */

export function myCall(context, ...args){
  // 给context重新赋值
  context = context || window
  // 取出调用函数，赋值给context
  context.fn = this
  // 执行
  const result = context.fn(...args)
  // 删除context的调用函数
  delete context.fn
  // 返回结果
  return result
}