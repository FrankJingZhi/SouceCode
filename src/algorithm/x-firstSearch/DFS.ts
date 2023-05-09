/**
 * 二叉树的深度优先搜索
 */

function DFS(root){
  if(!root) return 

  console.log(root.val)
  DFS(root.left)
  DFS(root.right)
}