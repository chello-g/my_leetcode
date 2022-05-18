// 题目描述：
// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。


// 示例 1：
// 输入：nums = [1,2,3,1]
// 输出：true


// 示例 2：
// 输入：nums = [1,2,3,4]
// 输出：false


// 示例 3：
// 输入：nums = [1,1,1,3,3,4,3,2,4,2]
// 输出：true


// 提示：
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109






/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 数组里面的value转为对象的key，利用key的唯一性
  let obj = {}
  for (let index in nums) {
    obj[nums[index]] = 1
  }
  if (Object.keys(obj).length < nums.length) {
    return true
  }
  return false
};
containsDuplicate([1,2,3,4])