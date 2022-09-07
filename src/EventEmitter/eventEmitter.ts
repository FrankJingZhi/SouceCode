/**
 * 手写发布订阅
 * 1.需要一个对象来存储事件
 * 2.订阅函数
 * 3.发布函数
 * 4.只执行一次的函数
 * 5.卸载函数
 */

 class EventEmitter{
  constructor(public events){
    // 存储调用事件
    this.events = {}
  }
  // 订阅函数
  on(eventName, cb){
    // 没有订阅过
    if(!this.events[eventName]){
      this.events[eventName] = [cb]
    }
    // 订阅过
    this.events[eventName].push(cb)
  }
  // 发布
  emit(eventName, ...args){
    // 发布函数不存在
    if(!this.events[eventName]){
      return
    }
    // 发布函数存在
    this.events[eventName].forEach(cb=>cb(...args))
  }
  // 只执行一次
  once(eventName, cb){
    // 内部存储一个临时事件
    const one = (...args) =>{
      cb(...args)
      // 执行完后销毁
      this.off(eventName, one)
    }
    // 自定义一个属性，因为我们对原始的cb包装了，off时找不到
    one.initalCb = cb
    // 注册
    this.on(eventName, one)
  }
  // 卸载
  off(eventName, cb){
    // 要销毁的事件不存在
    if(!this.events[eventName]){
      return
    }
    // 要销毁的事件存在
    const newCbs = this.events[eventName].filter(fn=>fn !== cb && fn.initalCb !== cb)
    this.events[eventName] = newCbs
  }
}