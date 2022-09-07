/**
 * 手写一个观察者
 * 以微信公众号为例，记录哪些用户关注了该公众号，当公众号更新时，通知到所有用户
 * 1.被观察者 - 微信公众号主体
 *    1.1 记录哪些用户关注了
 *    1.2 新增关注用户
 *    1.3 删除关注用户
 *    1.4 消息更新后通知用户
 * 2.观察者 - 用户主体
 *    2.1 生成新用户实例
 *    2.2 通知用户消息更新 - 具体实现在公众号主体
 */
// 被观察者
export class Subject{
  // 存储所有观察者
  public observers
  constructor(){
    this.observers = []
  }
  // 新增观察者
  add(observer){
    this.observers.push(observer)
  }
  // 删除观察者
  remove(observer){
    const index = this.observers.indexOf(observer)
    // 如果观察者不存在
    if(index === -1){
      return 
    }
    this.observers.splice(index, 1)
  }
  // 更新消息并通知所有观察者
  update(newState){
    this.observers.forEach(observer => observer.notify(newState))
  }
}
// 观察者
export class Observer{
  // 创建观察者实例
  constructor(public name){
    this.name = name
  }
  // 通知观察者，被观察者的信息被更新了
  notify(newState){
    console.log(this.name + '消息更新为' + newState)
  }
}

const subject = new Subject()
const observer1 = new Observer('小王')
const observer2 = new Observer('小李')

subject.add(observer1)
subject.add(observer2)

subject.update('888')

subject.remove(observer1)

subject.update('999')