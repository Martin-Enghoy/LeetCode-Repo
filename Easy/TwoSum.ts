function twoSum(nums: number[], target: number): number[] {
  let tempSum = 0;

  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      tempSum = nums[x] + nums[y];
      if (tempSum === target) {
        return [x, y];
      }
    }
  }

  return [];
}
