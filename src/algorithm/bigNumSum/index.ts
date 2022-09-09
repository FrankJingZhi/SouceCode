/**
 * 大数相加
 * 思路：
 * 1、将number转为string，再转为array
 * 2、用0补齐两个数组，设置一个进位的标记carry
 * 3、对应位数相加再加上carry。如果大于10，carry=1；如果小于10，carry=0。将个位数推入结果数组
 * 4、遍历完成后将结果数组处理成字符串输出
 * @param numA 
 * @param numB 
 */


export function bigNumSum(numA, numB){
  let resArr:string[] = []
  let carry = 0
  let arrA = numA.toString().split('')
  let arrB = numB.toString().split('')
  const distance = arrA.length - arrB.length
  const maxLen = distance > 0 ? arrA.length : arrB.length 
  if(distance > 0){
    for(let i=0;i<distance;i++) arrB.unshift('0')
  }else{
    for(let i=0;i<distance;i++) arrA.unshift('0')
  }
  for(let i=0;i<maxLen;i++){
    const temp = Number(arrA[i]) + Number(arrB[i]) + carry
    if(temp > 10){
      carry = 1
      resArr[i] = temp.toString()[1]
    }else{
      carry = 0
      resArr[i] = temp.toString()
    }
  }
  return resArr.join('').replace(/^0/,'')
}