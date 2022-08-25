/**
 * const func = (a, b) => a + b; 要求编写Typescript，要求a，b参数类型一致，都为number或者都为string
 */
// 方法一：函数重载
function func1(a:number,b:number):number
function func1(a:string,b:string):string
function func1(a: any, b: any):any{
  return a + b 
}
console.log('func1:',func1(1,2))

// 方法二：
interface Add {
  (a:number,b:number):number;
  (a:string,b:string):string;
}
function func2(a,b):Add{
  return a + b
}

console.log('func2:',func1(1,2))