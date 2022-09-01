/**
 * 手写防抖
 */

export function debounce(fn: Function, wait: number){
  let timer
  return function(){
    const context = this
    const args = arguments
    timer && clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(context, args)
    }, wait)
  }
}