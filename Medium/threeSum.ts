// https://leetcode.com/problems/3sum/description/

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b); // ascending
  const answer = [];

  console.log('nums: ', nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      // console.log('nums[i]: ', nums[i]);
      // console.log('nums[left]: ', nums[left]);
      // console.log('nums[right]: ', nums[right]);
      // console.log('sum: ', sum)
      if (sum > 0) {
        right -= 1;
      } else if (sum < 0) {
        left += 1;
      } else {
        answer.push([nums[i], nums[left], nums[right]]);
        right -= 1;
        left += 1;
        while (left < right && nums[left] === nums[left - 1]) {
          left += 1;
        }
      }
    }
  }

  return answer;
}
