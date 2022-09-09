/**
 * 手写bind
 * promise1：context
 * promise2：args - Array
 */

Function.prototype.bind = function(context, args){
  // context初始化
  context = context || window
  // 返回一个函数，供后续调用
  return function(newArgs){
    // 函数内部执行
    return context.apply(context, [...args,...newArgs])
  }
}

