/**
 * 2215. Find the Difference between Two Arrays
 * @param nums1 - first arr of num
 * @param nums2 - second arr of num
 * @returns two arrays - unique elements of nums1 not in nums2, and unique elements of nums2 not in nums1
 */
function findDifference(nums1: number[], nums2: number[]): number[][] {
  const nums1ex = new Set<number>();
  const nums2ex = new Set<number>();
  const both = new Set<number>();

  for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
    const num1 = nums1[i];
    const num2 = nums2[i];

    if (num1 !== undefined && !both.has(num1)) {
      if (nums2ex.has(num1)) {
        nums2ex.delete(num1);
        both.add(num1);
      } else {
        nums1ex.add(num1);
      }
    }

    if (num2 !== undefined && !both.has(num2)) {
      if (nums1ex.has(num2)) {
        nums1ex.delete(num2);
        both.add(num2);
      } else {
        nums2ex.add(num2);
      }
    }
  }
  return [Array.from(nums1ex), Array.from(nums2ex)];
}
