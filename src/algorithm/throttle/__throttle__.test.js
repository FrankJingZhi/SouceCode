import { expect, test, vi, describe } from "vitest"
import {throttle} from './throttle.ts'

describe('throttle',()=>{
  // 启用定时器模拟器
  vi.useFakeTimers()
  test('throttleFn 每隔 100ms 执行一次',()=>{
    const test = vi.fn()
    const throttleFn = throttle(test, 100)
    throttleFn(1)
    throttleFn(2)
    throttleFn(3)
    // 执行所有的定时器
    vi.runAllTimers()
    // 这里如何每隔100ms执行一次的测试用例？？
    // test执行了3次
    expect(test).toHaveBeenCalledTimes(3)
  })
})