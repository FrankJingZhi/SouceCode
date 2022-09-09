/**
 * 手写call
 * params1: this/context，要指向的对象
 * params2: args，Array
 */
type contextType = {
  fn?: Function
}
export function myApply(context:contextType, args = []):any{
  // 默认值不会排除null，所以重新赋值
  context = context || window
  // 取到调用的函数，赋值给context
  context.fn = this
  // 利用this隐式调用，将this指向context
  const result = context.fn && context.fn(args)
  // 删除赋值给context的函数
  delete context.fn
  // 返回结果
  return result
}
