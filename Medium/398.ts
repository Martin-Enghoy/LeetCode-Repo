/**
 * 398. Random Pick Index
 * @param nums input of array of integers that will be used by pick() function
 * @returns ans array of random index of a dupicate of the target
 */

class Solution {
  numsMap = new Map<number, number[]>();
  constructor(nums: number[]) {
    nums.forEach((num, idx) => {
      let indeces = this.numsMap.get(num);
      indeces ? indeces.push(idx) : (indeces = [idx]);

      this.numsMap.set(num, indeces);
    });
  }

  pick(target: number): number {
    const indeces = this.numsMap.get(target);
    const randIndex = Math.floor(Math.random() * indeces!.length);
    return indeces![randIndex];
  }
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
