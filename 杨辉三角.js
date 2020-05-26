/**
 * 杨辉三角
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 示例: 
 * 输入: 5 | 输出: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
    let rows = []
    for (let i = 1; i <= numRows; i++) {
        let temp = []
        if (i > 2) {
            for (let j = 0; j <= rows[i - 2].length; j++) {
                temp.push((rows[i - 2][j - 1] || 0) + (rows[i - 2][j] || 0))
            }
        }
        rows[i - 1] = i === 1 ? [1] : i === 2 ? [1, 1] : temp
    }
    return rows
}
console.log(generate(5))