/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = 0;
  // let right = nums.length-1;
  let tempVal = 0;
  let numidx = 0;
  const countZeros = nums.filter((num) => num !== 0).length;

  // console.log(countZeros)

  if (nums.length > 1) {
    while (numidx < countZeros) {
      if (nums[left] === 0) {
        left++;
      } else {
        tempVal = nums[left]; // non-zero number
        nums[left] = 0; // move 0
        nums[numidx] = tempVal; // non-zero number move to leftmost
        numidx++;
        left++;
      }
      // console.log(nums)
    }
  }
}
