/**
 * 盛最多水的容器
 * 给定 n 个非负整数 a1，a2，…，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 示例：输入：[1,8,6,2,5,4,8,3,7] | 输出：49
 * 思路：初始最大面积为0，在开始位置和结束位置各放一个指针，面积取决于较短的指针，所以每次把较短的指针往较高的指针移动
 * 把两根指针与x轴组成的面积与最大面积比较，更新最大面积
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
    // 如果height是非数组或者长度不大于1，则面积为0
    if (!Array.isArray(height) || height.length <= 1) {
        return 0
    }

    // 设置左右两根指针
    let left = 0
    let right = height.length - 1
    // 初始化最大面积
    let maxArea = 0

    // 在两根指针重合之前
    while (left < right) {
        // 面积取决于较短的指针
        const area = ( right - left ) * Math.min(height[left], height[right])

        // 更新最大面积
        if (maxArea < area) {
            maxArea = area
        }
        // 移动较短的指针
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
}

console.log(maxArea([1, 2, 3, 4, 5]))