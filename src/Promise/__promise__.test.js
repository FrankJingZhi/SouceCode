import { expect, test } from 'vitest'
import MyPromise from './index'

test('promise',()=>{
  let p1,p2,p3,p4
  new MyPromise((resolve)=>{
    p1 = 1
    resolve(2)
  })
  .then(2)
  .then(3)
  .then((res)=>{
    p2 = res
    console.log(p2)
  })
  expect(p1).toBe(1)
  expect(p2).toBe(undefined)
})