/**
 * 实现一个方法multiRequestLimitNum(reqArr, limitNum)，功能如下
 * 1、可以并发请求
 * 2、最大并发数不能超过limitNum
 * 3、每次执行完一个，就可以从reqArr中取出一个补上
 * 4、最后按顺序返回reqArr的执行结果
 */

function multiRequestLimitNum(reqArr, limitNum){
  const reqLen = reqArr.length
  const resArr = new Array(reqLen) // 初始化一个等长的数组，存储执行结果
  let i = 0 // 用来标识执行的请求索引
  return new Promise((resolve, reject)=>{
    const maxNum = reqLen >= limitNum ? limitNum : reqLen; // 计算最大并发数量
    while(i < maxNum){ // 将并发请求放到异步队列中，并发执行
      reqFn()
    }
    // 请求执行函数
    async function reqFn(){
      const cur = i++ // 记录当前请求的索引，等执行完成后存入对应的resArr中
      const fn = reqArr[cur] // 取出当前的请求
      const data = await fn().catch(err=>err) // 等待请求执行完成
      resArr[cur] = data // 将执行结果放入对应的resArr中
      console.log(resArr) // 这里的打印可以看到每次输出的结果
      i === reqLen ? resolve(resArr) : reqFn() // 如果全部执行完，那么就返回；否则，就从reqArr中再取出一个继续执行
    }
  })
}

function req (res, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res)
    }, delay)
  })
}
multiRequestLimitNum([
  req.bind(null, 1, 1000),
  req.bind(null, 2, 500),
  req.bind(null, 3, 2000),
  req.bind(null, 4, 100)],
  2)