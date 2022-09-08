/**
 * 手写节流
 * 函数在wait时间内多次调用，每次都隔固定的时间后再执行
 */

export function throttle(fn, wait){
  let timer
  return function(){
    const context = this
    const args = arguments
    // 函数调用后，隔wait时间后执行
    timer = setTimeout(()=>{
      // 等待时间结束后，先清空timer
      // 这里不能用clearTimeout，这样会把整个定时器销毁
      timer = null
      // 执行函数
      fn.apply(context, args)
    }, wait)
  }
}