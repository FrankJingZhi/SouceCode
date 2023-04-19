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
    val: '1-1',
    left: {
      val: '1-1-1',
    },
    right: {
      val: '1-1-2'
    }
  },
  right: {
    val: '2',
    left: {
      val: '2-2-1',
      left: {
        val: '2-2-1',
      },
      right: {
        val: '2-2-2'
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