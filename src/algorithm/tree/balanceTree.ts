/**
 * 描述一颗二叉树
 */

function balanceTreeNode(node) {
  if (node === null) {
    return null;
  }
  return {
    val: node.val,
    left: node.left,
    right: node.right
  }
}

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

console.log('treeNode', treeNode)


/**
 * 先序递归遍历二叉树
 */
function preOrderBalanceTree(node){
  if(!node) return
  console.log('前序遍历当前遍历的节点值是', node.val)
  preOrderBalanceTree(node.left)
  preOrderBalanceTree(node.right)
}

preOrderBalanceTree(treeNode)

/**
 * 中序遍历二叉树
 */
function inOrderBalanceTree(node){
  if(!node) return 
  inOrderBalanceTree(node.left)
  console.log('中序遍历当前遍历的节点值是', node.val)
  inOrderBalanceTree(node.right)
}

inOrderBalanceTree(treeNode)

/**
 * 后序遍历二叉树
 */
function postOrderBalanceTree(node){
  if(!node) return 
  postOrderBalanceTree(node.left)
  postOrderBalanceTree(node.right)
  console.log('后序遍历当前遍历的节点值是', node.val)
}

postOrderBalanceTree(treeNode)