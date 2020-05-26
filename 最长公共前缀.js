/**
 * 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * 示例 1: 输入: ["flower","flow","flight"] || 输出: "fl"
 * 示例 2: 输入: ["dog","racecar","car"] || 输出: ""
 * 说明：所有输入只包含小写字母 a-z 。
 * ASCII: a-z | 97-122
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    let prefix = strs[0]
    let temp
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < prefix.length) {
            temp = prefix
            prefix = strs[i]
        } else {
            temp = strs[i]
        }
        while (!temp.startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix === '') {
                return ''
            }
        }
    }
    return prefix
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight', 'float']));