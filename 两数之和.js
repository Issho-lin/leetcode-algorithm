/**
 * 两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 思路：目标值与某个元素的差值等于另外一个元素，则找出这两个元素即可
 * 方法：遍历数组，把每个元素的与目标值的差值作为属性，其对应的下标作为属性值存到一个对象里，如果下一个元素能在对象里找到与之相等的差值属性，则取出对应的两个下标
 * @param {number[]} nums 
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (num in obj) {
            return [obj[num], i]
        } else {
            obj[target - num] = i
        }
    }
}
console.log(twoSum([1, 2, 3, 4, 5], 5))