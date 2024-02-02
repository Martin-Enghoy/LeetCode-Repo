type Func = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Func, init: number): number {
  let rednum: number = init;

  if (nums.length === 0) {
    return init;
  }

  for (let i = 0; i < nums.length; i++) {
    rednum = fn(rednum, nums[i]);
  }

  return rednum;
}
