/**
 * 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

  示例 1: 输入: "aba"
  输出: True
  示例 2:
  输入: "abca"
  输出: True
  解释: 你可以删除c字符。
  注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
  abccda
 */

function palindromicString(string){
  let i = 0,
      j = string.length-1
  while(i<j){
    if(string[i] !== string[j]){
      const pal1 = string.slice(i,j)
      const pal2 = string.slice(i+1,j+1)
      const reversePal1 = pal1.split('').reverse().join('')
      const reversePal2 = pal2.split('').reverse().join('')
      console.log(i,j,pal1,pal2,reversePal1,reversePal2)
      if(pal1 === reversePal1 || pal2 === reversePal2) return true
      else return false
    }else {
      i++;
      j--;
    }
  }
  return true
}

console.log('palindromicString', palindromicString('abcba'))

// 判断字符串是否回文