/**
 * 1. 检测
 * 
 */
function myInstanceof(L, R){
  let O = R.prototype
  L = L.__proto__
  while(true){
    if(L === null) return false
    if(L === O) return true
    L = L.__proto__
  }
}

const foo = ()=>{}
console.log(myInstanceof(foo, Object))