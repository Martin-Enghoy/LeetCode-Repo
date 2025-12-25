// https://leetcode.com/problems/container-with-most-water/
function maxArea(height: number[]): number {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // Set maxArea if adjustment has larger area than previous\
    maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maxArea;
}
