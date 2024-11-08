/*珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。
每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。
珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

示例 1：
输入: piles = [3,6,7,11], H = 8
输出: 4

示例 2：
输入: piles = [30,11,23,4,20], H = 5
输出: 30

示例 3：
输入: piles = [30,11,23,4,20], H = 6
输出: 23

示例4：
输入：piles = [312884470]，h =312884469
输出：2
 
提示：
1 <= piles.length <= 10^4
piles.length <= H <= 10^9
1 <= piles[i] <= 10^9
*/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let max = Math.max(...piles)
  let left = 1,
    right = max
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    let midHours = piles.reduce((acc, item) => acc + Math.ceil(item / mid), 0) // 以mid速度吃完所有香蕉所需的小时数
    if (midHours > h) {
      // 慢
      left = mid + 1
    } else {
      // 快
      right = mid
    }
  }
  return left
}

console.log(minEatingSpeed([3, 6, 7, 11], 8))
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5))
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6))
console.log(minEatingSpeed([312884470], 312884469))
