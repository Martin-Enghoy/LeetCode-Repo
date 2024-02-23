function searchInsert(nums: number[], target: number): number {
  const arr: number[] = nums;
  // let ans: number = 0;
  let loc: number = Math.round(arr.length / 2); // For comparison

  // Edge Case: greater than last
  if (target <= arr[0]) {
    return 0;
  }

  // Edge Case: less than first
  if (target > arr[arr.length - 1]) {
    return arr.length;
  }

  console.log("loc: " + loc);
  // Iterate midpoints
  while (loc > 0 && loc < arr.length) {
    console.log("loc: " + loc);
    if (target > arr[loc - 1] && target < arr[loc]) {
      break;
    }
    if (target === arr[loc]) {
      loc - 1;
      break;
    }
    if (target > arr[loc]) {
      loc = Math.round((loc + arr.length) / 2);
    } else if (target < arr[loc]) {
      loc = Math.round(loc / 2);
    }
  }

  return loc;
}
