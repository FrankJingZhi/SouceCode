/**
 * 1. const func = (a, b) => a + b; 要求编写Typescript，要求a，b参数类型一致，都为number或者都为string
 */
// 方法一：函数重载
function func1(a:number,b:number):number
function func1(a:string,b:string):string
function func1(a: any, b: any):any{
  return a + b 
}
console.log('func1:',func1(1,2))

// 方法二：函数声明
interface Add {
  (a:number,b:number):number;
  (a:string,b:string):string;
}
function func2(a,b):Add{
  return a + b
}

console.log('func2:',func1(1,2))

/**
 * 2. 用ts实现一个单例模式
 */

class MySingleton1 {
  static singleton: MySingleton1
  private constructor(public name){
    this.name = name
    console.log('MySingleton1被实例化了')
  }
  public static getInstance(name:string){
    if(this.singleton) {
      return this.singleton
    }
    return this.singleton = new MySingleton1(name)
  }
}
const singleton1 = MySingleton1.getInstance('wang')
const singleton2 = MySingleton1.getInstance('frank')
console.log(singleton1.name)
console.log(singleton2.name)
console.log(singleton1 === singleton2)
