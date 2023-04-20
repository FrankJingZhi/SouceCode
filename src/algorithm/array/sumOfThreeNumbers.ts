/**
 * 对撞指针 - 三数求和
 * 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
  注意：答案中不可以包含重复的三元组。

  示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
  关键信息：有序、数组
 */
// 时间复杂度O(n^2)
function threeNumbersSum(nums, target) {
  let result:any = []
  // 必须要先排序
  const sortNums = nums.sort((a,b)=>a-b)
  console.log('sortNums',sortNums)
  // [ -4, -1, -1, 0, 1, 2 ]
  for(let i=0;i<sortNums.length-2;i++){
    let j = i+1,
        k = sortNums.length-1;
    // 过滤掉重复的数字 - i，j，k都过滤掉重复的之后，也就过滤掉重复的集合了
    if(i>0 && nums[i]>nums[i-1]) continue
    while(j<k){
      const sum = sortNums[i] + sortNums[j] + sortNums[k]
      console.log(sortNums[i], sortNums[j], sortNums[k])
      if(sum > target){
        k--
        while(j<k && nums[k]===nums[k+1]) k--
      }else if(sum < target){
        j++
        while(j<k && nums[j]===nums[j-1]) j++
      }else{
        result.push([sortNums[i],sortNums[j],sortNums[k]])
        j++
        k--
        while(j<k && nums[k]===nums[k+1]) k--
        while(j<k && nums[j]===nums[j-1]) j++
      }
    }
  }
  return result
}
console.log('threeNumbersSum',threeNumbersSum([-1, 0, 1, 2, -1, -4], 0))

