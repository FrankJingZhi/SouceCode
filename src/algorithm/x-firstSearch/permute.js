/**
 * 关键套路初相见：全排列问题
 * 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 示例：
输入: [1,2,3]
输出: [
[1,2,3],
[1,3,2],
[2,1,3],
[2,3,1],
[3,1,2],
[3,2,1]
]
 */
function permute(nums) {
    var len = nums.length;
    var cur = [];
    var visited = {};
    var result = [];
    let n = 0
    function dfs(nth) {
        if (nth === len) {
            result.push(cur.slice());
            return;
        }
        for (var i = 0; i < len; i++) {
            if (!visited[nums[i]]) {
                console.log(n++)
                cur.push(nums[i]);
                visited[nums[i]] = 1;
                dfs(nth+1);
                cur.pop();
                visited[nums[i]] = 0;
            }
        }
    }
    dfs(0);
    return result;
}
console.log('permute', permute([1, 2, 3]));
