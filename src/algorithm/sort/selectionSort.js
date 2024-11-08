/**
 * 选择排序
 * 找出最大的值，与最后一个值做交换
 * 算法复杂度O(n^2)
 * 不稳定排序，比如 7 5 10 10 2 4 2
 */

function selectionSort(nums) {
  for (let end = len - 1; end > 0; end--) {
    let maxIndex = 0
    for (let start = 1; start <= end; start++) {
      if (nums[start] >= nums[start - 1]) {
        // 这里需要用>=，可以增加稳定性
        maxIndex = start
      }
    }
    let tmp = nums[start]
    nums[start] = nums[end]
    nums[end] = tmp
  }
}
