/**
 * 题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。
 * 
 * 示例: 输入: [1,null,2,3]
 *      输出: [1,2,3]
 * 
  进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 */



const treeNode = {
  val: '1',
  left: {
    val: '2',
    left: {
      val: '3',
    },
    right: {
      val: '4'
    }
  },
  right: {
    val: '5',
    left: {
      val: '6',
      left: {
        val: '7',
      },
      right: {
        val: '8'
      }
    }
  }
}

// 迭代算法的先序遍历
// 1,2,3,4,5,6,7,8
function preOrder(treeNode){
  let stack:any[] = [],
      result:any[] = []
  stack.push(treeNode)
  while(stack.length){
    const cur = stack.pop() // 栈顶元素出栈
    result.push(cur.val) // 栈顶元素推入结果数组
    if(cur.right){ // 如果有节点存在，则推入栈中
      stack.push(cur.right)
    }
    if(cur.left){ // 如果有节点存在，则推入栈中
      stack.push(cur.left)
    }
  }
  return result
}
console.log('preOrder', preOrder(treeNode))

// 迭代算法的后序遍历
// 3,4,2,7,8,,6,5,1
function postOrder(treeNode){
  let stack: any[] = [],
      result: any[] = []
  stack.push(treeNode)
  while(stack.length){
    const cur = stack.pop()
    result.unshift(cur.val) // 往结果数组栈前添加元素
    if(cur.left){
      stack.push(cur.left)
    }
    if(cur.right){
      stack.push(cur.right)
    }
  }
  return result
}
console.log('postOrder', postOrder(treeNode))

// 迭代算法的中序遍历
// 3,2,4,1,7,6,8,5
function inOrder(treeNode){
  let stack: any[] = [],
      result: any[] = [];
  let temp = treeNode // 游标，记录当前应该遍历的元素
  while(temp || stack.length){
    while(temp){
      stack.push(temp)
      temp = temp.left
    }
    temp = stack.pop()
    result.push(temp.val)
    temp = temp.right
  }
  return result
}
console.log('inOrder', inOrder(treeNode))

// 二叉树的层序遍历
function levelOrder(treeNode){
  let result: any[] = []
  let queue:any[] = []
  queue.push(treeNode)
  while(queue.length){
    const level:any[] = []
    const len = queue.length
    for(let i=0;i<len;i++){
      const cur:any = queue.shift()
      level.push(cur.val)
      if(cur.left){
        queue.push(cur.left)
      }
      if(cur.right){
        queue.push(cur.right)
      }
    }
    result.push(level)
  }
  return result
}
console.log('levelOrder', levelOrder(treeNode))

// 翻转二叉树
function reverseTree(treeNode){
  if(!treeNode) return treeNode
  let left = reverseTree(treeNode.left)
  let right = reverseTree(treeNode.right)
  treeNode.left = right;
  treeNode.right = left
  return treeNode
}
console.log('reverseTree', reverseTree(treeNode))