/**
 * 相同的树
 * @param {TreeNode} p 
 * @param {TreeNode} q 
 * @return {boolean} true | false
 */
const isSameTree = (p, q) => {
    // 如果p,q都null，空二叉树，那么他们相等
    if (p === null && q === null) {
        return true
    }
    // 如果p,q只有一个为null，则不相等
    if (p === null || q === null) {
        return false
    }
    // 如果p,q的值不相等，则不相等
    if (p.val !== q.val) {
        return false
    }
    // 如果p,q的值相等，则递归判定左右子树
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
let tree1 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: {
            val: 3,
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

let tree2 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
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
    }
}

console.log(isSameTree(tree1, tree2))