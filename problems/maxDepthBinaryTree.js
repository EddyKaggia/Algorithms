/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {number}
 */

const maxDepth = (root) => {
    if(!root) return 0;
    let left = maxDepth(root.left), right = maxDepth(root.right);
    if(Math.abs(left - right)) res = false;

    return 1 + Math.mx(left, right);

};

console.log(maxDepth([3,9,20,null,null,15,7]));