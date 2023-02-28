//Given a binary tree, check if it is balanced (ie the heights of the two subtrees of any node never differ by more than one.	

    //    3
    //   / \
    //  9  20
    //    /  \
    //   15   7

    //height balance of node  = height of right subtree – height of left subtree

const isBalanced = () => {
    let result = true;

    const maxDepth = (node) => {
        if(!node) return 0;
        let left = maxDepth(node.left), right = maxDepth(node.right);
        if(Math.abs(left - right)) res = false;

        return 1 + Math.max(left, right);

    };

    maxDepth(root);
    return res;
    //Time complexity: This is because the maxDepth function is called recursively on each node of the tree exactly once, and each call to maxDepth takes O(log n) time in the average case, and O(n) time in the worst case, due to the need to visit every node in the tree.
    //Space complexity: Note that the space complexity of the function is O(log n) in the average case, and O(n) in the worst case, due to the recursive calls to maxDepth and the call stack that is built up as a result.

}