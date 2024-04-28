// * Implementation takes too long as it is O(n^2)
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // edge-case:
  if (nums.length < 2) {
    return false;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        if (Math.abs(i - j) <= k) {
          return true;
        }
      }
    }
  }

  return false;
}

// * Better implementation using hash-map
/**
 * 1. Initialize a hash map (myMap) to store the indices of elements.
 * 2. Iterate through the array using a loop.
 * 3. For each element in the array:
 *      - Check if the element already exists in the map (myMap).
 *      - If yes, calculate the absolute difference between the current index and the stored index in the map.
 *          - If the abs is less than or equal to k, return true.
 *          - If not, update the index of the current element in the map.
 *      - If the element is not in the map, add it to the map with the current index.
 * 4. If nos uch pair of indices is found during the iteration, return false.
 *
 * Time: O(n) where n is the number of elements in the array. Each element is processed once in the loop.
 * Space: O(n), worst case, where all elements are unique and stored in the map.
 */

function containsNearbyDuplicateToo(nums: number[], k: number): boolean {
  var myMap = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (myMap.has(nums[i]) && Math.abs(myMap.get(nums[i]) - i) <= k) {
      return true;
    } else {
      myMap.set(nums[i], i);
    }
  }
  return false;
}
