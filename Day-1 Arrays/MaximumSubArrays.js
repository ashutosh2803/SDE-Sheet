/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxStore = Number.MIN_SAFE_INTEGER;
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    maxSum = maxSum + nums[i];

    if (maxSum > maxStore) maxStore = maxSum;

    if (maxSum < 0) maxSum = 0;
  }
  return maxStore;
};
