/**
 * 实现对象深拷贝
 */

// 方法一
export function cloneDeep1<T>(obj: object): T{
  return JSON.parse(JSON.stringify(obj))
}

// 方法二
export function cloneDeep2<T>(obj: object): T{
  if(typeof obj === 'object'){
    let result = Array.isArray(obj) ? [] : {}
    for(const key in obj){
      result[key] = cloneDeep2(obj[key])
    }
    return result as T
  }else{
    return obj
  }
}