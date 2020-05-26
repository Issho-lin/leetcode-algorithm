/**
 * 二叉树的层次遍历 II
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *   3
 *  / \
 * 9  20
 *   /  \
 *  15   7
 * 返回其自底向上的层次遍历为：[[15,7],[9,20],[3]]
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 * 
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = root => {
    if (root === null) {
        return []
    }
    let result = []
    const search = (r, i) => {
        if (r) {
            if (result[i] === undefined) {
                result[i] = []
            }
            result[i].push(r.val)
            search(r.left, i + 1)
            search(r.right, i + 1)
        }
    }
    search(root, 0)
    return result

}

const tree = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

console.log(levelOrderBottom(tree))