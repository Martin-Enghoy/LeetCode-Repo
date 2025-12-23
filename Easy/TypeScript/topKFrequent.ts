// 347 - https://leetcode.com/problems/top-k-frequent-elements

function topKFrequent(nums: number[], k: number): number[] {
  const freqMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (freqMap.has(nums[i])) {
      let temp = freqMap.get(nums[i]);
      freqMap.set(nums[i], temp+=1);
    } else {
      freqMap.set(nums[i], 1);
    }
  }

  // @ts-ignore
  const sortedMap = new Map([...freqMap.entries()].sort((a, b) => b[1] - a[1]));

  // console.log('sortedMap: ', sortedMap);

  // console.log('sortedMap.keys(): ', sortedMap.keys());

  // return descFreqValues.slice(0,k-1);
  // return [];

  // @ts-ignore
  return [...sortedMap.keys()].slice(0,k);
}
