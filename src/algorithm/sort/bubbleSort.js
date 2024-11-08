/**
 * 冒泡排序
 * 元素两两比较排序
 * 复杂度O(n^2)
 * 稳定排序
 */

function bubbleSort1(nums) {
  const len = nums.length
  for (let end = len - 1; end > 0; end--) {
    for (let start = 0; start <= end; start++) {
      if (nums[start] > nums[start + 1]) {
        // 为了保证稳定性，这里需要用>
        const tmp = nums[start]
        nums[start] = nums[start + 1]
        nums[start + 1] = tmp
      }
    }
  }
  return nums
}

console.log(bubbleSort1([10, 4, 2, 11]))

function bubbleSort2(nums) {
  const len = nums.length
  for (let end = len - 1; end > 0; end--) {
    let isSort = true
    for (let start = 0; start <= end; start++) {
      if (nums[start] > nums[start + 1]) {
        const tmp = nums[start]
        nums[start] = nums[start + 1]
        nums[start + 1] = tmp
        isSort = false
      }
    }
    if (isSort) break
  }
}

function bubbleSort3(nums) {
  const len = nums.length
  for (let end = len - 1; end > 0; end--) {
    let sortIndex = 1
    for (let start = 0; start <= end; start++) {
      if (nums[start] > nums[start + 1]) {
        const tmp = nums[start]
        nums[start] = nums[start + 1]
        nums[start + 1] = tmp
        sortIndex = start
      }
    }
    end = sortIndex
  }
}
