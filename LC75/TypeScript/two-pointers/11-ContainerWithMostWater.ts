function maxAreaFirst(height: number[]): number {
  let total = 0;
  let right = Math.floor(height.length / 2); // Put mp as right pointer
  let left = 0; // left pointer as starting

  for (let i = right; i < height.length; i++) {
    for (let j = left; j < i; j++) {
      if (height[j] >= height[i] && height[i] * (i - j) > total) {
        total = height[i] * (i - j); // height j is greater
      } else if (height[i] > height[j] && height[j] * (i - j) > total) {
        total = height[j] * (i - j); // height i is greater
      }
      console.log(i, j, height[i], height[j], total);
    }
  }

  return total;
}

function maxAreaSpace(height: number[]): number {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      (right - left) * Math.min(height[left], height[right])
    );

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
