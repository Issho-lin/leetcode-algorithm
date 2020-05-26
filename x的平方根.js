/**
 * x的平方根
 * 实现 int sqrt(int x) 函数。
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 示例 1: 输入: 4 | 输出: 2
 * 示例 2: 输入: 8 | 输出: 2 | 说明: 8 的平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 * 0~46340
 * @param {number} x
 * @return {number}
 */
// const mySqrt = x => {
//     let left = 0
//     let right = 46340
//     let mid = right
//     while (left < right) {
//         if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
//             return mid
//         }
//         if (mid * mid > x) {
//             right = mid
//         } else {
//             left = mid
//         }
//         mid = Math.floor((left + right) / 2)
//     }
// }
// console.log(mySqrt(2147395600))

const mySqrt = x => {
    let left = 0
    let right = 46340
    for (let mid = right; left < right; mid = Math.floor((left + right) / 2)) {
        if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
            return mid
        }
        if (mid * mid > x) {
            right = mid
        } else {
            left = mid
        }
    }
}

console.log(mySqrt(2147395600))