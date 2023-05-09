/**
 * 二叉树的广度优先搜索
 */

function BFS(root){
  let queue = [root]
  while(queue.length){
    console.log(queue[0].val)
    if(queue[0].left){
      queue.push(queue[0].left)
    }
    if(queue[0].right){
      queue.push(queue[0].right)
    }
    queue.shift()
  }
}

const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

BFS(root)