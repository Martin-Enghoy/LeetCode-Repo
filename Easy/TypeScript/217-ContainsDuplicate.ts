function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      return true; // does have duplicates
    }
  }
  return false; // does not have duplicates
}

function containsDuplicateToo(nums: number[]): boolean {
  let set = new Set();
  for (let x of nums) {
    // short circuits the loop at the first instance of a duplicate
    if (set.has(x)) return true;
    set.add(x);
  }
  return false;
}
