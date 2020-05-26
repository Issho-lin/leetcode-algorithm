/**
 * 删除排序链表中的重复元素
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null
 * }
 * 示例 1: 输入: 1->1->2 | 输出: 1->2
 * 示例 2: 输入: 1->1->2->3->3 | 输出: 1->2->3
 * @param {ListNode} head
 * @return {ListNode}
 */
let l1 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: null
        }
    }
}

let l2 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: null
                }
            }
        }
    }
}

const deleteDuplicates = head => {
    let list = new ListNode()
    let pre = list
    let val = null
    while (head !== null) {
        if (val !== head.val) {
            val = head.val
            pre.next = new ListNode(val)
            pre = pre.next
        }
        head = head.next
    }
    return list.next
}

function ListNode(val) {
    this.val = val
    this.next = null
}

console.log(deleteDuplicates(l2))
