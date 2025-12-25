// https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutive(nums: number[]): number {
  const sortedArr = nums.sort(function(a, b) {
    return a - b;
  });
  let answer = 0;
  let prev = 0;

  // console.log("sorted: ", sortedArr);

  let currLength = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if ((sortedArr[i] - prev) === 1 || i === 0) {
      currLength+=1;
      prev = sortedArr[i];
      // console.log(`currLength add 1 (${currLength}) in index ${i}`);
    } else if (sortedArr[i] !== prev) {
      if (currLength > answer) {
        answer = currLength;
      }
      currLength = 1;
      prev = sortedArr[i];
    }

    if (currLength > answer) {
      answer = currLength;
    }
  }

  return answer;
}
