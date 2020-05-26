/**
 * 二进制求和
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 * 示例 1: 输入: a = "11", b = "1" | 输出: "100"
 * 示例 2: 输入: a = "1010", b = "1011" | 输出: "10101"
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    let val = 0
    let res = []
    while (a.length !== 0 || b.length !== 0 || val !== 0) {
        if (a.length !== 0) {
            val += +a[a.length - 1]
        }
        if (b.length !== 0) {
            val += +b[b.length - 1]
        }
        res.unshift(val > 2 ? 1 : val > 1 ? 0 : val)
        val = val > 1 ? 1 : 0
        a = a.substr(0, a.length - 1)
        b = b.substr(0, b.length - 1)
    }
    return res.join('')
}
console.log(addBinary('', ''))