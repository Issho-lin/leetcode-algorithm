/**
 * 杨辉三角Ⅱ
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 示例:
 * 输入: 3 | 输出: [1,3,3,1]
 * 进阶：你可以优化你的算法到 O(k) 空间复杂度吗？
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {
    let rows = []
    for (let i = 0; i <= rowIndex; i++) {
        if (i > 1) {
            for (let k = rowIndex; k >= 0; k--) {
                rows[k] = (rows[k] || 0) + (rows[k - 1] || 0)
            }
        }
        rows = i === 0 ? [1] : i === 1 ? [1, 1] : rows
    }
    return rows
}

console.log(getRow(4))