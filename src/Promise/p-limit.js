async function sendRequest(requestList, limits, callback) {
  // 维护一个promise队列
  const promises = []
  // 当前的并发池,用Set结构方便删除
  const pool = new Set() // set也是Iterable<any>[]类型，因此可以放入到race里
  // 开始并发执行所有的任务
  for (let request of requestList) {
    // 开始执行前，先await 判断 当前的并发任务是否超过限制
    if (pool.size >= limits) {
      // 这里因为没有try catch ，所以要捕获一下错误，不然影响下面微任务的执行
      await Promise.race(pool).catch((err) => err)
    }
    const promise = request() // 拿到promise
    // 删除请求结束后，从pool里面移除
    const cb = () => {
      pool.delete(promise)
    }
    // 注册下then的任务
    promise.then(cb, cb)
    pool.add(promise)
    promises.push(promise)
  }
  // 等待所有的任务都执行完毕，再执行callback
  // 注意这里其实是在微任务当中了，当前的promises里面是能确保所有的promise都在其中(前提是await那里命中了if)
  Promise.allSettled(promises).then(callback, callback)
}

function sendRequest1(requestList, limits, callback) {
  const promises = requestList.slice() // 取得请求list（浅拷贝一份）
  // 得到开始时，能执行的并发数
  const concurrentNum = Math.min(limits, requestList.length)
  let concurrentCount = 0 // 当前并发数
  // 第一次先跑起可以并发的任务
  const runTaskNeeded = () => {
    let i = 0
    // 启动当前能执行的任务
    while (i < concurrentNum) {
      i++
      runTask()
    }
  }
  // 取出任务并且执行任务
  const runTask = () => {
    const task = promises.shift()
    task && runner(task)
  }
  // 执行器
  // 执行任务，同时更新当前并发数
  const runner = async (task) => {
    try {
      concurrentCount++
      await task()
    } catch (error) {
    } finally {
      // 并发数--
      concurrentCount--
      // 捞起下一个任务
      picker()
    }
  }
  // 捞起下一个任务
  const picker = () => {
    // 任务队列里还有任务并且此时还有剩余并发数的时候 执行
    if (concurrentCount < limits && promises.length > 0) {
      // 继续执行任务
      runTask()
      // 队列为空的时候，并且请求池清空了，就可以执行最后的回调函数了
    } else if (promises.length == 0 && concurrentCount == 0) {
      // 执行结束
      callback && callback()
    }
  }
  // 入口执行
  runTaskNeeded()
}

// 设计一个函数，可以限制请求的并发，同时请求结束之后，调用callback函数
// sendRequest(requestList:,limits,callback):void
sendRequest(
  [
    () => request('1', 4),
    () => request('2', 1),
    () => request('3', 2),
    () => request('4', 5),
    () => request('5', 1),
  ],
  3, //并发数
  (res) => {
    console.log(res)
  }
)
// 其中request 可以是：
function request(url, time = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('请求结束：' + url)
      if (Math.random() > 0.5) {
        resolve('成功')
      } else {
        reject('错误;')
      }
    }, time * 1000)
  })
}
//2 3 5 1 4

Promise.limitAll = function (promises, limit) {
  return new Promise((resolve) => {
    let resolvedCount = 0
    let count = 0
    let res = []
    const len = promises.length
    function next(p, index) {
      p().then((r) => {
        res[index] = r
        resolvedCount++
        if (promises.length) {
          const p = promises.shift()
          next(p, count)
          count++
        } else if (resolvedCount === len) {
          // console.timeEnd('limit-all')
          resolve(res)
        }
      })
    }

    while (count < limit && promises.length) {
      const p = promises.shift()
      next(p, count)
      count++
    }
  })
}

const promiseFactory = (res, timeout) => {
  return () =>
    new Promise((resolve) => {
      console.count('get in pool')
      setTimeout(() => {
        resolve(res)
      }, timeout)
    })
}
// console.time('start')
// document.writeln('executing...')
// Promise.limitAll(
//   [
//     promiseFactory(1, 4000),
//     promiseFactory(2, 1000),
//     promiseFactory(3, 2000),
//     promiseFactory(4, 5000),
//     promiseFactory(5, 1000),
//   ],
//   3
// ).then((res) => {
//   const str = res.join(',')
//   document.writeln(str)
//   console.log(str)
//   console.timeEnd('start')
// })
