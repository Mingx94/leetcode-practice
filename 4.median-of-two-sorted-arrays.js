/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (25.67%)
 * Total Accepted:    393.3K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 *
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * Example 1:
 *
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 *
 *
 * Example 2:
 *
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length === 0) {
    return getMedian(nums2);
  }
  if (nums2.length === 0) {
    return getMedian(nums1);
  }

  let length = nums1.length + nums2.length;
  let isLengthEven = length % 2 === 0;
  let medianIndex = isLengthEven ? length / 2 + 1 : (length + 1) / 2;
  let x = 0,
    y = 0,
    temp = [];
  // debugger;
  for (let i = 0; i < medianIndex; i++) {
    if (nums1[x] === undefined || nums2[y] === undefined) {
      if (nums1[x] === undefined) {
        temp[i] = nums2[y];
        y += 1;
      } else if (nums2[y] === undefined) {
        temp[i] = nums1[x];
        x += 1;
      }
    } else if (nums1[x] < nums2[y]) {
      temp[i] = nums1[x];
      x += 1;
    } else if (nums1[x] > nums2[y]) {
      temp[i] = nums2[y];
      y += 1;
    } else if (nums1[x] == nums2[y]) {
      temp[i] = nums1[x];
      x += 1;
    }
  }
  // console.log(temp, temp[medianIndex - 2] + temp[medianIndex - 1]);
  return isLengthEven ? (temp[medianIndex - 2] + temp[medianIndex - 1]) / 2 : temp[medianIndex - 1];
};

function getMedian(arr) {
  let length = arr.length;
  if (length === 1) {
    return arr[0];
  }
  let isLengthEven = length % 2 === 0;
  let medianIndex = arr.length % 2 === 0 ? length / 2 : (length + 1) / 2;
  return isLengthEven ? (arr[medianIndex - 1] + arr[medianIndex]) / 2 : arr[medianIndex - 1];
}

console.log(findMedianSortedArrays([], [1, 2, 3, 4, 5]));
