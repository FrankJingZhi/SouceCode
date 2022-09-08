/**
 * 手写防抖
 * 函数在wait时间内多次调用，每次调用都会清除上一次的计时器，并重新开始计时
 */

export function debounce(fn: Function, wait: number){
  let timer
  return function(){
    const context = this
    const args = arguments
    // 每次调用函数前都要先清除之前调用的计时器
    timer && clearTimeout(timer)
    // 重新开始计时
    timer = setTimeout(()=>{
      fn.apply(context, args)
    }, wait)
  }
}