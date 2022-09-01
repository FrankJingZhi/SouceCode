// https://sinoui.github.io/sinoui-guide/docs/jest-debounce
import {vi,describe,test,expect} from 'vitest'
import {debounce} from './debounce'

describe('debounce', ()=>{
  // 启用定时器模拟器
  vi.useFakeTimers();
  test('test was called 1 times', () => {
    const test = vi.fn();
    const debounced = debounce(test, 1000);
    // 多次执行只会触发一次
    debounced();
    debounced();
    debounced();
    vi.runAllTimers();
    
    expect(test).toHaveBeenCalledTimes(1);
  });
})