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

function permute(nums){
  // 缓存数组长度
  const len = nums.length
  // 循环中的数组
  const cur:number[] = []
  // 当前循环访问过的数组
  const visited:Record<string, number> = {}
  // 结果数组
  const result:number[][] = []
  function dfs(nth){
    // 如果访问次数 === 数组长度，则将当前循环产生的结果放到结果数组中
    if(nth === len){
      result.push(cur.slice())
      return
    }
    // 遍历数组中的元素
    for(let i=0;i<len;i++){
      // 如果当前元素已经被访问过,则跳过
      if(!visited[nums[i]]){
        // 将当前元素放入当前循环中
        cur.push(nums[i])
        // 将当前元素在访问过的数组中标记
        visited[nums[i]] = 1
        // 寻找下一个元素
        dfs(nth+1)
        // nums[i]让出当前坑位
        cur.pop()
        // 将当前元素在访问过的数组中去掉标记
        visited[nums[i]] = 0
      }
    }
  }
  dfs(0)
  return result
}

console.log('permute',permute([1,2,3]))