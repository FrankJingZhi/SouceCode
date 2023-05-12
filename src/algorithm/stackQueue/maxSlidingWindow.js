/**
 * 双端队列 - 滑动窗口问题
 * 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

  示例: 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]

  解释: 滑动窗口的位置
  ---------------
  [1 3 -1] -3 5 3 6 7
  1 [3 -1 -3] 5 3 6 7
  1 3 [-1 -3 5] 3 6 7
  1 3 -1 [-3 5 3] 6 7
  1 3 -1 -3 [5 3 6] 7
  1 3 -1 -3 5 [3 6 7]

  最大值分别对应：
  3 3 5 5 6 7

  提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
 */
function maxSlidingWindow(nums, k) {
    var len = nums.length;
    var result = [];
    var queue = [];
    for (var i = 0; i < len; i++) {
        // 当队尾元素大于当前元素时，当前元素入队
        while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop();
        }
        queue.push(i);
        // 当队头元素不在滑动窗口内时，队头元素出队
        while (queue.length && queue[0] <= i - k) {
            queue.shift();
        }
        // 只有被遍历的元素个数大于k时才更新结果数组
        if (i >= k - 1) {
            result.push(nums[queue[0]]);
        }
    }
    return result;
}
console.log('maxSlidingWindow', maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
