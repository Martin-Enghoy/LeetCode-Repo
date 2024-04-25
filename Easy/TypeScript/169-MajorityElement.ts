function majorityElement(nums: number[]): number {
  const frequencyMap = new Map();

  // Count the frequency of each number in the array
  nums.forEach((num) => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });

  let maxFrequency = 0;
  let mode = 0;

  // Find the number with the highest frequency
  frequencyMap.forEach((frequency, num) => {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mode = num;
    }
  });

  return mode;
}
