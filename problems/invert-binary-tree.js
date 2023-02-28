function invertTree(root) {
    if (!root) {
      return null;
    }
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
  }
  