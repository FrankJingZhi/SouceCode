/**
 * 限定组合问题：及时回溯，即为“剪枝”
  题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

  示例: 输入: n = 4, k = 2
  输出:
  [
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
  ]
 */
function combine(n, k) {
    var cur = [];
    var result = [];
    function dfs(index) {
        if (cur.length === k) {
            return result.push(cur.slice());
        }
        for (var i = index; i < n + 1; i++) {
            cur.push(i);
            dfs(i + 1);
            cur.pop();
        }
    }
    dfs(1);
    return result;
}
console.log('combine', combine(4, 2));
