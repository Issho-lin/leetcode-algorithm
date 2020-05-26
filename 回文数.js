/**
 * 回文数
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 示例 1: 输入: 121 | 输出: true
 * 示例 2: 输入: -121 | 输出: false | 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 示例 3: 输入: 10 | 输出: false | 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 进阶:
 * 你能不将整数转为字符串来解决这个问题吗？
 * @param {number} x
 * @return {boolean}
 */
// const isPalindrome = x => {
//     let s = String(x)
//     let length = s.length
//     for (let i = 0; i < length / 2 >> 0; i++) {
//         if (s[i] !== s[length - 1 -i]) {
//             return false
//         }
//     }
//     return true
// }
const isPalindrome = x => {
    if (x === 0) {
        return true
    }
    if (x < 0) {
        return false
    }
    if (x % 10 === 0) {
        return false
    }

    let res
    for (res = 0; x !==0; x = x / 10 >> 0) {
        res = res * 10 + x % 10
    }
    if (x === res) {
        return true
    }
    return false
}
console.log(isPalindrome(0))