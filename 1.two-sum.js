/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (42.20%)
 * Total Accepted:    1.5M
 * Total Submissions: 3.6M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example:
 *
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let arr = nums.map((el, i) => ({ originalIndex: i, value: el })).sort((a, b) => a.value - b.value);

  for (let i = 0; i < arr.length; i += 1) {
    let remainder = target - arr[i].value;

    for (let j = i + 1; j < arr.length; j += 1) {
      if (remainder === arr[j].value) {
        return [arr[i].originalIndex, arr[j].originalIndex];
      } else if (remainder < arr[j].value) {
        break;
      } else {
        continue;
      }
    }
  }
};

// O(n) solution 60ms
// var twoSumSol2 = function (nums, target) {
//   let ans = [], map = {};
//   for (let i = 0; i < nums.length; i += 1) {
//     if (typeof (map[target - nums[i]]) !== 'undefined') {
//       ans.push(map[target - nums[i]])
//       ans.push(i);
//     }
//     map[nums[i]] = i;
//   }
//   return ans;
// };

console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSumSol2([0, 4, 3, 0], 0));
