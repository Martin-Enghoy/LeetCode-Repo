/**
 * 1207. Unique Number of Occurrences
 * @param arr - array of integers
 * @returns boolean - true if the number of all integer occurrences are unique, otherwise false. (e.g all,occurrences of 1 is 1, 2 is 2, 3 is 3, etc.)
 */
function uniqueOccurrences(arr: number[]): boolean {
  const numOcc = new Set<number>();
  const nums = new Set<number>();

  for (let i = 0; i < arr.length; i++) {
    const occ = arr.filter((num) => num === arr[i]).length;

    // Check num occ if unique and num unique
    if (!numOcc.has(occ) && !nums.has(arr[i])) {
      numOcc.add(occ);
      nums.add(arr[i]);
    }
    // Check if num occ not unique and num unique
    else if (numOcc.has(occ) && !nums.has(arr[i])) {
      return false;
    }
  }

  return true;
}
