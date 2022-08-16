/**
 * 把构造函数的原型链指向实例的原型链
 */

export function MyNew(){
  // 新建一个空对象
  const obj = new Object()
  // 取出构造函数，并将其从参数数组中删除
  let Constructor = [].shift.call(arguments)
  // 把构造函数的原型链指向实例的原型链
  obj.__proto__ = Constructor.prototype
  // 把构造函数的this指向obj，并将参数传入执行
  const result = Constructor.apply(obj, arguments)
  // 如果构造函数返回一个对象，则返回该对象，否则，返回obj
  return typeof result === 'object' ? result : obj
}