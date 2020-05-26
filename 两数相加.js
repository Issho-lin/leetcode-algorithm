/**
 * 两数相加
 * 给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照逆序的方式存储的
 * 并且它们的每个节点只能存储一位数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 示例：
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let list = new ListNode()
    let pre = list
    let val = 0
    
    while (l1 !== null || l2 !== null || val !== 0) {
        if (l1 !== null) {
            val += l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            val += l2.val
            l2 = l2.next
        }
        pre.next = new ListNode(val % 10)
        pre = pre.next
        val = Math.floor(val / 10)
    }
    return list.next
}

function ListNode(val) {
    this.val = val
    this.next = null
}
// 245
let l1 = {
    val: 5,
    next: {
        val: 4,
        next: {
            val: 2,
            next: null
        }
    }
}
// 6015
let l2 = {
    val: 5,
    next: {
        val: 1,
        next: {
            val: 0,
            next: {
                val: 6,
                next: null
            }
        }
    }
}

console.log(addTwoNumbers(l1, l2))
