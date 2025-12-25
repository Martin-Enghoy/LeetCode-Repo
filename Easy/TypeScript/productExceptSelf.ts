// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {
  const answer = new Array(nums.length).fill(1);


  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] *= product;
    product *= nums[i];
  }

  // console.log('answer loop 1: ', answer);

  product = 1;
  for (let y = nums.length - 1; y >= 0; y--) {
    answer[y] *= product;
    product *= nums[y];
  }

  // console.log('answer loop 2: ', answer);

  return answer;
}
