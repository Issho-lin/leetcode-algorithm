/**
 * 最大子序和
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 示例：输入: [-2,1,-3,4,-1,2,1,1,1] | 输出: 6 | 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 进阶:
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
    if (nums.length === 1) {
        return nums[0]
    }
    let res = 0
    let max = nums[0]

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        res += num
        
        if (nums[i] > max) {
            max = nums[i]
        }
        if (res > max) {
            max = res
        }
        if (res < 0) {
            res = 0
        }
    }
    return max
}

console.log(maxSubArray([-2,-1,2,0,1]))
