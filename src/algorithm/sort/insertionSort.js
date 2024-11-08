/**
 * 插入排序 - 扑克牌排序
 * 将拿到的值插入到合适的位置
 * 时间复杂度O(n^2)
 * 稳定排序
 * 逆序对-插入排序的时间复杂度与逆序对数量正相关
 */

function insertionSort(nums) {
  for (let start = 1; start < nums.length; start++) {
    let cur = start
    while (cur > 0 && nums[cur] < nums[cur - 1]) {
      const tmp = nums[cur]
      nums[cur] = nums[cur - 1]
      nums[cur - 1] = tmp
      cur--
    }
  }
}

/**
 *
 */
