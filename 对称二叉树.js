/**
 * 对称二叉树
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *   1
 *  / \
 * 2   2
 *  \   \
 *   3   3
 * 进阶：
 * 你可以运用递归和迭代两种方法解决这个问题吗？
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = root => {
    if (root === null) {
        return true
    }
    
    return leftSymmetryRitht(root.left, root.right)
}

const leftSymmetryRitht = (left, right) => {
    if (left === null && right === null) {
        return true
    }
    if (left === null || right === null) {
        return false
    }
    if (left.val !== right.val) {
        return false
    }
    return leftSymmetryRitht(left.left, right.right) && leftSymmetryRitht(left.right, right.left)
}

const tree1 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}

const tree2 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 3
        }
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 3
        }
    }
}

console.log(isSymmetric(tree2))