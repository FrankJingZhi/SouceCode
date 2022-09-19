/**
 * 最长递增子序列
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  let len=nums.length
  let dp=Array(len+1).fill(1)
  let result=1
  for(let i=1;i<len;i++){   //第i个位置的最长子序列
      for(let j=0;j<i;j++){  //遍历0到i-1的值，与i比较，小的则加入
          if(nums[i]>nums[j]){  
              dp[i]=Math.max(dp[i],dp[j]+1)
          }
      }
      result=Math.max(dp[i],result)  //保存最大值
  }
  return result
};