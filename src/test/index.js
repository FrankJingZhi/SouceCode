function to(promise, errorExt = {}) {
  if (!(promise instanceof Promise)) {
    promise = new Promise((resolve) => resolve(promise))
  }
  return promise.then((data) => [null, data]).catch((err) => [err, null])
}

// // 使用辅助函数
async function wrappedFetchData() {
  const someAsyncOperation = () => 123
  // Promise.resolve('Error in someAsyncOperation')
  const [error, result] = await to(someAsyncOperation())
  if (error) {
    // 错误处理
    console.error('Error in wrappedFetchData:', error)
  } else {
    // 正常处理结果
    console.log(result)
  }
}

// wrappedFetchData()

function buildTree(items) {
  const map = new Map() // 创建一个map用于快速查找

  items.forEach((item) => {
    map.set(item.id, { ...item, children: [] }) // 初始化每个元素并添加children属性
  })

  items.forEach((item) => {
    if (item.parentId !== null) {
      // 如果当前项有父节点
      const parent = map.get(item.parentId) // 查找其父节点
      if (parent) {
        parent.children.push(map.get(item.id)) // 将当前项添加到其父节点的children数组中
      }
    }
  })

  return [...map.values()].filter((node) => node.parentId === null) // 返回所有parentId为null（即根节点）的项
}

// const arr = [
//   {
//     parentId: null,
//     id: 1,
//   },
//   {
//     parentId: 1,
//     id: 2,
//   },
//   {
//     parentId: 2,
//     id: 3,
//   },
//   {
//     parentId: 1,
//     id: 4,
//   },
// ]

// console.log(buildTree(arr))
// console.log(JSON.stringify(buildTree(arr)))

function buildTree(arr) {
  let map = new Map()
  arr.forEach((item) => {
    map.set(item.id, { ...item, children: [] })
  })
  arr.forEach((item) => {
    if (item.parentId !== null) {
      const parent = map.get(item.parentId)
      if (parent) {
        parent.children.push(map.get(item.id))
      }
    }
  })
  return [...map.values()].filter((item) => item.parentId === null)
}

function flattenTree(items) {
  const result = []
  function trans(item) {
    const newItem = { parentId: item.parentId, id: item.id }
    result.push(newItem)
    if (item.children) {
      item.children.forEach(trans)
    }
  }
  items.forEach(trans)
  return result
}
// const arr1 = [
//   {
//     parentId: null,
//     id: 1,
//     children: [
//       { parentId: 1, id: 2, children: [{ parentId: 2, id: 3 }] },
//       { parentId: 1, id: 4 },
//     ],
//   },
// ]

// console.log(flattenTree(arr1))

function BFS(root) {
  if (!root) return null
  let queue = [root],
    result = []
  while (queue.length) {
    result.push(queue[0].val)
    if (queue[0].left) {
      queue.push(queue[0].left)
    }
    if (queue[0].right) {
      queue.push(queue[0].right)
    }
    queue.shift()
  }
  return result
}

// const root = {
//   val: 'A',
//   left: {
//     val: 'B',
//     left: {
//       val: 'D',
//     },
//     right: {
//       val: 'E',
//     },
//   },
//   right: {
//     val: 'C',
//     right: {
//       val: 'F',
//     },
//   },
// }
// console.log(BFS(root))
/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.queue = new Array(k)
  this.max = k
  this.head = this.tail = 0
  this.count = 0
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false
  this.head = this.head - 1 === -1 ? this.max : this.head - 1
  this.queue[this.head] = value
  this.count++
  return true
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false
  this.queue[this.tail] = value
  this.tail = this.tail + 1 > this.max ? 0 : this.tail + 1
  this.count++
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false
  this.head = this.head + 1 > this.max ? 0 : this.head + 1
  this.count--
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false
  this.tail = this.tail - 1 === -1 ? this.max : this.tail - 1
  this.count--
  return true
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1
  return this.queue[this.head]
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1
  const cur = this.tail - 1 === -1 ? this.max : this.tail - 1
  return this.queue[cur]
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.count === 0
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.count === this.max
}

// const opts = [
//   'MyCircularDeque',
//   'insertLast',
//   'insertLast',
//   'insertFront',
//   'insertFront',
//   'getRear',
//   'isFull',
//   'deleteLast',
//   'insertFront',
//   'getFront',
// ]
// const values = [[3], [1], [2], [3], [4], [], [], [], [4], []]

// for (let i = 0; i < opts.length; i++) {
//   const opt = opts[i]
//   const value = values[i]
//   if (opt === 'MyCircularDeque') {
//     obj = new MyCircularDeque(value[0])
//   } else {
//     console.log(obj[opt](...value))
//   }
// }

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 数组扁平化
function flat(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(flat(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

// [1,1,1,2,3,3,4,4,4,4,5,6,6]
function merge(arr) {
  const result = []
  let i = 0,
    j = 1
  while (j <= arr.length) {
    if (arr[i] === arr[j]) {
      j++
    } else {
      if (j - i === 1) {
        result.push(arr[j])
      } else {
        result.push(arr.slice(i, j))
      }
      i = j
      j++
    }
  }
  return result
}
// const arr = [1, 1, 1, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6]
// console.log(merge(arr))

var getNext = function (n) {
  const str = n + ''
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    sum += str[i] * str[i]
  }
  return sum
}
var isHappy = function (n) {
  if (n === 1) return true
  let slow = n,
    fast = getNext(n)
  while (true) {
    if (slow === fast) {
      return false
    }
    if (slow === 1 || fast === 1) {
      return true
    }
    slow = getNext(slow)
    fast = getNext(getNext(fast))
  }
}
// isHappy(2)

//
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (bills[0] !== 5) return false
  let five = 0
  let ten = 0
  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        five++
        break
      case 10:
        if (five === 0) {
          return false
        } else {
          five--
          ten++
        }
        break
      case 20:
        if (ten > 0) {
          if (five > 0) {
            five--
            ten--
          } else {
            return false
          }
        } else {
          if (five >= 3) {
            five = five - 3
          } else {
            return false
          }
        }
        break
    }
  }
  return true
}
// const bills = [5, 5, 5, 10, 5, 5, 10, 20, 20, 20]
// console.log(lemonadeChange(bills))

var reverse = function (arr, result) {
  if (arr.length === 1) return
  let arr1 = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr.length) {
      result.push(i + 1)

      arr1 = arr
        .slice(0, i)
        .reverse()
        .concat(arr.slice(i + 1))
      break
    }
  }
  result.push(arr.length)
  reverse(arr1.reverse(), result)
}
var pancakeSort = function (arr) {
  if (arr.length <= 1) return []
  let result = []
  reverse(arr, result)
  return result
}
// const arr = [3, 2, 4, 1]
// console.log(pancakeSort(arr))

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stackIn = []
  this.stackOut = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackIn.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.empty()) return
  if (this.stackOut.length) {
    return this.stackOut.pop()
  } else {
    const len = this.stackIn.length
    for (let i = len - 1; i >= 0; i--) {
      this.stackOut.push(this.stackIn[i])
      this.stackIn.pop()
    }
    return this.stackOut.pop()
  }
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.empty()) return
  if (this.stackOut.length) {
    return this.stackOut[this.stackOut.length - 1]
  } else {
    const len = this.stackIn.length
    for (let i = len - 1; i >= 0; i--) {
      this.stackOut.push(this.stackIn[i])
      this.stackIn.pop()
    }
    return this.stackOut[this.stackOut.length - 1]
  }
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stackIn.length && !this.stackOut.length
}

const opts = ['MyQueue', 'push', 'pop', 'empty']

const values = [[], [1], [], []]

for (let i = 0; i < opts.length; i++) {
  const opt = opts[i]
  const value = values[i]
  if (opt === 'MyQueue') {
    obj = new MyQueue()
  } else {
    console.log(obj[opt](...value))
  }
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let addCount = 0
  let result = []
  // 处理右括号多的情况
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    result.push(cur)
    if (cur === '(') {
      addCount++
    } else if (cur === ')') {
      addCount--
    }
    if (addCount < 0) {
      result.pop()
      addCount++
    }
  }
  // 处理左括号多的情况
  if (addCount) {
    for (let i = result.length - 1; i >= 0 && addCount; i--) {
      if (result[i] === '(') {
        result.splice(i, 1)
        addCount--
      }
    }
  }
  return result.join('')
}
const s = '())()((('
console.log(minRemoveToMakeValid(s))

function BFS(root) {
  if (!root) return null
  const queue = [root]
  const result = []
  while (queue.length) {
    const node = queue[0]
    result.push(node.val)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
    queue.shift()
  }
  return result
}

function BFS2(root) {
  const result = [],
    i = 0
  function getLevelNode(node, result, i) {
    if (!node) return null
    if (result[i]) result[i].push(node.val)
    else result[i] = [node.val]
    getLevelNode(node.left, result, i + 1)
    getLevelNode(node.right, result, i + 1)
  }
  getLevelNode(root, result, i)
  return result
}

const num = {
  a: 10,
  reduce: () => this.a - 2,
}
console.log(num.reduce())

var removeOuterParentheses = function (s) {
  if (!s) return null
  let diffCount = 0,
    prev = 0
  let result = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      diffCount++
    } else {
      diffCount--
    }
    if (diffCount === 0) {
      result.push(s.slice(prev, i + 1))
      prev = i + 1
    }
  }
  for (let i = 0; i < result.length; i++) {
    const cur = result[i]
    result[i] = cur.slice(1, cur.length - 1)
  }
  return result.join('')
}
// const s1 = '(()())(())'
// console.log(removeOuterParentheses(s1))

var isValidSerialization = function (preorder) {
  let preOrder = preorder.split(',')
  let stack = []
  for (let i = 0; i < preOrder.length; i++) {
    let val = preOrder[i]
    stack.push(val)
    while (stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#') {
      stack.pop()
      stack.pop()
      stack[stack.length - 1] = '#'
    }
  }
  return stack.length === 1 && stack[0] === '#'
}
const preorder = '9,3,4,#,#,1,#,#,2,#,6,#,#'
console.log(isValidSerialization(preorder))

class Heap {
  constructor(data) {
    this.data = data
    this.heapify()
  }
  // 初始化为一个堆
  heapify() {
    if (this.size() < 2) return
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i)
    }
  }
  // 堆的大小
  size() {
    return this.data.length
  }
  // 查看堆顶元素
  peek() {
    if (!this.size()) return null
    return this.data[0]
  }
  // 插入元素
  offer(val) {
    this.data.push(val)
    this.bubbleUp(this.size() - 1)
  }
  // 删除堆顶元素
  poll() {
    if (!this.size()) return null
    if (this.size() === 1) return this.data.pop()
    const result = this.data[0]
    this.data[0] = this.data.pop()
    this.bubbleDown(0)
    return result
  }
  // 上浮元素
  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = (index - 1) >> 1 //  => Math.floor((index-1)/2)
      if (this.data[index] < this.data[parentIndex]) break
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }
  // 下沉元素
  bubbleDown(index) {
    let lastIndex = this.size() - 1
    while (index < lastIndex) {
      let leftIndex = 2 * index + 1
      let rightIndex = 2 * index + 2
      let findIndex = index
      let minIndex = leftIndex
      if (this.data[rightIndex] !== undefined) {
        if (this.data[leftIndex] < this.data[rightIndex]) minIndex = rightIndex
        else minIndex = leftIndex
      }
      if (this.data[findIndex] < this.data[minIndex]) findIndex = minIndex
      if (index === findIndex) break
      this.swap(index, findIndex)
      index = findIndex
    }
  }
  // 交换元素位置
  swap(i, j) {
    if (i === j) return
    ;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}

var KthLargest = function (k, nums) {
  this.heap = new Heap(nums)
  this.k = k
}

KthLargest.prototype.add = function (val) {
  this.heap.offer(val)
  while (this.heap.size() > this.k) {
    this.heap.poll()
  }
  return this.heap.peek()
}
// const opts1 = ['KthLargest', 'add', 'add', 'add', 'add', 'add']
// const values1 = [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

// for (let i = 0; i < opts1.length; i++) {
//   const opt = opts1[i]
//   const value = values1[i]
//   if (opt === 'KthLargest') {
//     obj = new KthLargest(...value)
//   } else {
//     console.log(obj[opt](...value))
//   }
// }

var lastStoneWeight = function (stones) {
  if (stones.length === 1) return stones[0]
  const heap = new Heap(stones)
  while (heap.size() > 1) {
    const stone1 = heap.poll()
    const stone2 = heap.poll()
    if (stone1 !== stone2) {
      heap.offer(Math.abs(stone1 - stone2))
    }
  }
  return heap.size() ? heap.peek() : 0
}
console.log(lastStoneWeight([10, 4, 2, 10]))

// async function async1() {
//   console.log('async1 start')
//   await async2() // 拆分成两步看，1.先执行async2 2.再执行await，所以后面的内容会放到微任务队列
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2')
// }
// console.log('script start')
// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)
// async1()
// new Promise(function (resolve) {
//   console.log('promise1')
//   resolve()
// }).then(function () {
//   console.log('promise2')
// })
// console.log('script end')

const printType = (param) => {
  if (param === undefined) return undefined
  if (param === null) return null
  if (Array.isArray(param)) return 'Array'
  return typeof param
}

// console.log(printType(1))
// console.log(printType('1'))
// console.log(printType(true))
// console.log(printType(undefined))
// console.log(printType(null))
// console.log(printType({}))
// console.log(printType([]))

const a = {
  i: 1,
  toString: function () {
    return a.i++
  },
}
if (a == 1 && a == 2) {
  console.log('123')
}

function updateColorScheme() {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  document.body.classList.toggle('dark', isDarkMode)
}

// 当用户改变系统主题时触发
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', updateColorScheme)

// 初始化时也检查并应用
updateColorScheme()

function reverseNodeList(nodeList) {
  if (!nodeList || !nodeList.next) return nodeList
  let prev = null
  let cur = nodeList
  while (cur) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

function prevOrder(root) {
  let result = []
  function fn(node, result) {
    if (!root) return
    result.push(node.val)
    node.left && fn(node.left, result)
    node.right && fn(node.right, result)
  }
  fn(root, result)
  return result
}

function BFS(root) {
  if (!root) return null
  let queue = [],
    i = 0
  let result = []
  while (queue.length) {
    const node = queue[0].val
    result.push(node)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
    queue.shift()
  }
  return result
}

class EventEmitter {
  constructor() {
    this.events = {}
  }
  on(eventName, cb) {
    if (!this.events[eventName]) this.events[eventName] = [cb]
    this.events[eventName].push(cb)
  }
  emit(eventName, ...args) {
    if (!this.events[eventName]) return
    this.events[eventName].forEach((cb) => cb(...args))
  }
  off(eventName, cb) {
    if (!this.events[eventName]) return
    const newCbs = this.events[eventName].filter((fn) => fn !== cb)
    this.events[eventName] = newCbs
  }
}

// 网络请求重试
// url, count

function myAxios(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

async function retry1(url, maxCount) {
  if (maxCount <= 0) return
  let count = 0
  async function fn(url, count) {
    if (count >= maxCount) return
    try {
      await myAxios(url)
      count = maxCount
    } catch (error) {
      count++
      await fn(url)
    }
  }
  return fn(url, count)
}

function retry2(url, maxCount) {
  return new Promise((resolve, reject) => {
    let count = 0
    function fn() {
      myAxios(url)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          if (++count > maxCount) {
            reject(err)
          }
          fn()
        })
    }
    fn()
  })
}

// type test1 = Await<Promise<number>> // number
// type test2 = Await<string> // string

// type Await<T> = T extends PromiseLike<infer U> ? U : T;

const add = (x) => x + 10
const multiply = (x) => x * 10

// 从右往左执行
compose(multiply, add)(10) // 200
compose(add, multiply, add)(10) // 210

function compose(...fns) {
  return function (value) {
    return fns.reduceRight((acc, fn) => fn(acc), value)
  }
}

/**
 * @param {string} t
 * @param {string} s
 * @return {boolean}
 */
var checkInclusion = function (t, s) {
  debugger
  // 需要的
  let need = {}
  // 窗口中的字符
  let window = {}
  for (let a of t) {
    // 统计需要的字符
    need[a] = (need[a] || 0) + 1
  }
  // 左右指针
  let left = 0,
    right = 0
  let valid = 0
  while (right < s.length) {
    // 即将移入窗口的字符
    let c = s[right]
    // 右移窗口
    right++
    if (need[c]) {
      // 当前字符在需要的字符中，则更新当前窗口统计
      window[c] = (window[c] || 0) + 1
      if (window[c] == need[c]) {
        // 当前窗口和需要的字符匹配时，验证数量增加1
        valid++
      }
    }
    while (right - left >= t.length) {
      if (valid == Object.keys(need).length) {
        return true
      }
      let d = s[left]
      left++
      if (need[d]) {
        if (window[d] == need[d]) {
          valid--
        }
        window[d]--
      }
    }
  }
  // 未找到符合条件的子串
  return false
}

checkInclusion('abd', 'eaidbaooo')
