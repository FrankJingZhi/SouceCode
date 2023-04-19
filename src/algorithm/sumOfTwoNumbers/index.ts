/**
 * Map的妙用 - 两数求和的问题
 *  真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

    示例: 给定 nums = [2, 7, 11, 15], target = 9
    因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
 */
// 两层for循环，简单粗暴
function getIndexByTargets1(nums, target) {
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i] + nums[j] === target) return [i,j]
    }
  }
}
console.log('getIndexByTargets1', getIndexByTargets1([2, 7, 11, 15],9))

// 利用map，将加法转换为减法
function getIndexByTargets2(nums, target){
  let map = {}
  for(let i=0;i<nums.length;i++){
    const diff = target - nums[i]
    // console.log(diff,map)
    if(map[diff] !== undefined) return [map[diff], i]
    else map[nums[i]] = i
  }
}
console.log('getIndexByTargets2', getIndexByTargets2([2, 7, 11, 15],9))

// es6的Map
function getIndexByTargets3(nums, target){
  let map = new Map()
  for(let i=0;i<nums.length;i++){
    const diff = target - nums[i]
    // console.log(diff,map.has(diff),map)
    if(map.has(diff)) return [map.get(diff), i]
    else map.set(nums[i], i)
  }
}
console.log('getIndexByTargets3', getIndexByTargets3([2, 7, 11, 15],9))