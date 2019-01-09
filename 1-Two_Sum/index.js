// my solution 76ms
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr = nums
    .map((el, i) => ({ originalIndex: i, value: el }))
    .sort((a, b) => a.value - b.value);

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

console.log(twoSum([0, 4, 3, 0], 0));

// O(n) solution 60ms
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumSol2 = function (nums, target) {
  let ans = [], map = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (typeof (map[target - nums[i]]) !== 'undefined') {
      ans.push(map[target - nums[i]])
      ans.push(i);
    }
    map[nums[i]] = i;
  }
  return ans;
};

console.log(twoSumSol2([0, 4, 3, 0], 0));
