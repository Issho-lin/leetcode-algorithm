/**
 * 合并两个有序链表
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null
 * }
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const l1 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}
const l2 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 8,
            next: null
        }
    }
}
const list = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 4,
                        next: null
                    }
                }
            }
        }
    }
}
function ListNode(val) {
    this.val = val
    this.next = null
}
const mergeTwoLists = (l1, l2) => {
    let list = new ListNode()
    let pre = list
    let val = 0
    while (l1 !== null || l2 !== null) {
        if (l1 === null) {
            val = l2.val
            l2 = l2.next
        } else if (l2 === null) {
            val = l1.val
            l1 = l1.next
        } else if (l1.val > l2.val) {
            val = l2.val
            l2 = l2.next
        } else {
            val = l1.val
            l1 = l1.next
        }

        pre.next = new ListNode(val)
        pre = pre.next
    }
    return list.next
}
console.log(mergeTwoLists(l1, l2))
// mergeTwoLists(l1, l2)
