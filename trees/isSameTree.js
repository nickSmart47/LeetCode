/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
  if(!p && !q) return true;

  if (!p || !q) return false;

  if (p.val !== q.val) return false;

  if (!isSameTree(p.left, q.left)) return false;
  if (!isSameTree(p.right, q.right)) return false;

  return true;
};

let p = new TreeNode(1, 2, 3);
let q = new TreeNode(1, 2, 3);

console.log(isSameTree(p, q));
