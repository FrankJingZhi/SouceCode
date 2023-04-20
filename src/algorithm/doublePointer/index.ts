/**
 * 双指针问题 - 合并两个有序数组
 * 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
  说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

  示例: 输入:
  nums1 = [1,2,3,0,0,0], m = 3
  nums2 = [2,5,6], n = 3
  输出: [1,2,2,3,5,6]
 */

function mergeArr(nums1, m, nums2, n){
  let i = m - 1, 
      j = n - 1, 
      k = m + n - 1;
  while(i>=0 && j>=0){
    if(nums1[i] > nums2[j]){
      nums1[k] = nums1[i]
      k--;
      i--;
    }else{
      nums1[k] = nums2[j]
      k--;
      j--;
    }
    // console.log('nums1', nums1, k, i, j)
  }
  // 单独处理一下nums2剩下的情况
  while(j>=0){
    nums1[k] = nums2[j]
    k--;
    j--; 
  }
  return nums1
}
console.log('mergeArr', mergeArr([2,5,6], 3, [1,2,3], 3))

// 但是就 JS 而言，我们还可以“另辟蹊径”，仔细想想，你有什么妙招？
function setArr(nums1, m, nums2, n){
  return [...nums1, ...nums2].sort((a,b)=> a-b)
}

console.log('setArr', setArr([2,5,6], 3, [1,2,3], 3))