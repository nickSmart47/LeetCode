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
function TreeNode(val, left, right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

 var isSameTree = function(p, q) {
    if (p.val == q.val){
        if (p.left == q.left){
            if (p.right == q.right){
                return true;
            }
        }
    }
    return false;
};

let p = TreeNode(1,2,3);
let q = TreeNode(1,2,3);
