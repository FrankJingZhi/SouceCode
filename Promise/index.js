// 定义三种状态
const PENDING = "PENDING";
const FULLFILLED = 'FULLFILLED';
const REJECTED = 'REJECTED';

class MyPromise{
  constructor(exector){
    // 初始化状态
    this.status = PENDING
    // 将成功和失败放到this上，以便于调用
    this.value = undefined
    this.reason = undefined
    // 成功的回调函数数组
    this.onFullFilledCallbacks = []
    // 失败的回调函数数组
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      // 只有进行中才能更改状态
      if(this.status === PENDING){
        this.status = FULLFILLED
        this.value = value
        // 依次执行
        this.onFullFilledCallbacks.forEach(fn => fn(this.value))
      }
    }

    const reject = reason => {
      if(this.status = PENDING){
        this.status = REJECTED
        this.reason = reason
        // 依次执行
       this.onRejectedCallbacks.forEach(fn => fn(this.reason))
      }
    }
    try{
      // 立即执行
      exector(resolve, reject)
    }catch(e){
      reject(e)
    }
  }
  then(onFullFilled, onRejected){
    onFullFilled = typeof onFullFilled === 'function' ? onFullFilled : (onFullFilled => onFullFilled);
    onRejected = 
      typeof onRejected === 'function' 
      ? onRejected 
      : (onRejected => {
          throw new Error(onRejected instanceof Error ? onRejected.message : onRejected)
        })
    const self = this
    return new MyPromise((resolve,reject)=>{
      if(self.status === PENDING){
        self.onFullFilledCallbacks.push(()=>{
          setTimeout(()=>{
            try {
                const result = onFullFilled(self.value)
                result instanceof MyPromise ? result.then(resolve,reject) : resolve(result)
            } catch (error) {
              reject(error)
            }
          })
          self.onRejectedCallbacks.push(()=>{
            setTimeout(()=>{
              try {
                  const result = onRejected(self.reason)
                  result instanceof MyPromise ? result.then(resolve,reject) : resolve(result)
              } catch (error) {
                reject(error)
              }
            })
          })
        })
      }else if(self.status === FULLFILLED){
        setTimeout(()=>{
          try {
            const result = onFullFilled(self.value)
            result instanceof MyPromise ? result.then(resolve,reject) : resolve(result)
          } catch (error) {
            reject(error)
          }
        })
      }else{
        setTimeout(()=>{
          try {
            const result = onRejected(self.reason)
            result instanceof MyPromise ? result.then(resolve,reject) : resolve(result)
          } catch (error) {
            reject(error)
          }
        })
      }
    })
  }
  catch(onRejected){
    return this.then(null, onRejected)
  }
  finish(){

  }
  static all(promiseArr){
    // 1. 记录resolve的Promise
    // 2. 如果reject则直接返回
    const len = promiseArr.length
    const values = new Array(len)
    let count = 0
    return new MyPromise((resolve,reject)=>{
      for (let i = 0; i < len; i++) {
        const value = promiseArr[i];
        MyPromise.resolve(value).then(
          val => {
            values[i] = val
            count++
            if(count === len) return resolve(values)
          },
          err => {
            reject(err)
          }
        )
      }
    })
  }
  static race(promiseArr){
    return new MyPromise((resolve,reject)=>{
      promiseArr.forEach(p=>{
        MyPromise.resolve(p).then(
          val => resolve(val),
          err => reject(err)
        )
      })
    })
  }
  static resolve(value){
    if(value instanceof MyPromise){
      return value
    }else{
      return new MyPromise((resolve,reject)=>resolve(value))
    }
  }
  static reject(reason){
    return new MyPromise((resolve,reject)=>reject(reason))
  }
}

const myP1 = new MyPromise((resolve,reject)=>{
  resolve(1)
})
const myP2 = new MyPromise((resolve,reject)=>{
  resolve(2)
})
const myPromiseArr = [myP1, myP2]
MyPromise.race(myPromiseArr).then((val1, val2)=>{
  console.log('MyPromise race: ',val1 , val2)
})

console.log('----------------------------')

const p1 = new Promise((resolve,reject)=>{
  resolve(1)
})
const p2 = new Promise((resolve,reject)=>{
  resolve(2)
})
const PromiseArr = [p1, p2]
Promise.race(PromiseArr).then((val1, val2)=>{
  console.log('Promise race: ',val1 , val2)
})

