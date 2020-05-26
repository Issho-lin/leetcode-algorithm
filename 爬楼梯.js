/**
 * 爬楼梯
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 * 示例 1：输入：2 | 输出：2 | 解释：有两种方法可以爬到楼顶。1. 1 阶 + 1 阶  2. 2 阶
 * 示例 2：输入：3 | 输出：3 | 解释：有三种方法可以爬到楼顶。1. 1 阶 + 1 阶 + 1 阶  2. 1 阶 + 2 阶  3. 2 阶 + 1 阶
 * 思路：
 * f(1) = 1
 * f(2) = 2
 * f(3) = f(1) + f(2) = 1 + 2 = 3
 * f(4) = f(2) + f(3) = 2 + 3 = 5
 * ...
 * f(n) = f(n-2) + f(n-1)
 * @param {number} n
 * @return {number}
 */
// const climbStairs = n => {
//     if (n <= 3) {
//         return n
//     }
//     let p = 1
//     let q = 1
//     for (let i = 4; i <= n; i++) {
//         let temp = q
//         q += p
//         p = temp
//     }
//     return p + 2 * q
// }

const climbStairs = n => {
    if (n <= 2) {
        return n
    }
    let p = 1
    let q = 2
    for (let i = 3; i <= n; i++) {
        let temp = q
        q += p
        p = temp
    }
    return q
}

console.log(climbStairs(5))