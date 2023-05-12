/**
 * 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
  说明：解集不能包含重复的子集。

  示例: 输入: nums = [1,2,3]
  输出:
  [
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
  ]
 */
function subset(nums) {
    var len = nums.length;
    var cur = [];
    var result = [];
    function dfs(index) {
        result.push(cur.slice());
        for (var i = index; i < len; i++) {
            cur.push(nums[i]);
            console.log(index,i)
            dfs(i + 1);
            cur.pop();
        }
    }
    dfs(0);
    return result;
}
console.log('subset', subset([1, 2, 3]));
