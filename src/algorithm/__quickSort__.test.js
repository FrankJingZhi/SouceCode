import { expect, test } from "vitest";
import { describe } from "vitest";
import quickSort from './quickSort'

describe('quickSort', ()=>{
  const arr = quickSort([26,24,56,41,35,12,24])
  test('arr is [12, 24, 24, 26, 35, 41, 56]', ()=>{
    expect(arr).toStrictEqual([12, 24, 24, 26, 35, 41, 56])
  })
})