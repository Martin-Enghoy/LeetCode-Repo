// Tongue Twister Word Counter

// Given a string (str) and an array of words (arr).
// Return an array of numbers representing how many the words in the array are
// repeated in the string in the order of how the array is arranged. The function should ignore letter case.

// Example
// str = "Peter Piper picked a peck of pickled peppers A peck of pickled peppers Peter Piper picked"
// arr = ["peter", "a", "pepper", "piper", "The"]
// Expected Output = [2, 2, 0, 2, 0]

const countInstances = (str: string, arr: string[]) => {
  // Write your code here
  let ans: number[] = [];
  let ctr: number = 0;

  let tempStr = str.toLowerCase();

  // Soln 1
  // indexOf() -> first index that would contain ans[ctr]
  // index() -> indices for each instance

  // Soln 2
  // str -> array[...str] that would have %20 (white space)

  // count instances of the words inside the string
  while (ctr < arr.length) {
    // Iterate through each word
    // ans.push(findIndex(ans[ctr]));
  }

  return ans;
};

// module.exports = countInstances;

export default countInstances;
