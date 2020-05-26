/**
 * 验证回文串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 示例 1:
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 示例 2:
 * 输入: "race a car"
 * 输出: false
 * 
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
    let str1 = ''
    let str2 = ''
    for (let i = s.length - 1; i >= 0; i--) {
        if (/[A-Za-z0-9]/.test(s[i])) {
            let lowercase = s[i].toLowerCase()
            str1 += lowercase
            str2 = lowercase + str2
        }
    }
    return str1 === str2
}
console.log(isPalindrome('race a car'))