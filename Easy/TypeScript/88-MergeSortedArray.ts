/**
 Do not return anything, modify nums1 in-place instead.
 */
//  Non-decreasing as in ascending order
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let ans: number[] = [];
  let ctr: number = 0; // To iterate on smaller array

  // Edge-case on no-length array 1
  // if (m === 0) {
  //     nums1 = nums2;
  // }

  // Edge-case on no-length array 2
  // else if (n === 0) {
  //     nums1 = nums1;
  // }

  let bigctr: number = 0;
  let subCheck: number = m < n ? m : n; // Get lower length between the two arrays
  let bigCheck: number = m > n ? m : n; // Get higher length between the two arrays
  let subArr: number[] = m < n ? nums1 : nums2; // Get smaller array
  let bigArr: number[] = m > n ? nums1 : nums2; // Get bigger array

  // Check for equal length
  if (m === n) {
    bigArr = nums1;
    subArr = nums2;
    subCheck = m;
    bigCheck = n;
  }

  // Edge-case on no-length array 1
  if (m <= 0 && n > 0) {
    for (let i = n - 1; i >= 0; i--) {
      ans.push(nums2[i]);
      console.log("PUSH: " + ans);
    }
    nums1 = ans;
    console.log("FINAL: " + nums1);
  } else {
    while (ctr < subCheck) {
      // Check less than or equal
      console.log("nums1: " + bigArr);
      if (subArr[ctr] <= bigArr[bigctr]) {
        bigArr.splice(bigctr, 0, subArr[ctr]); // Insert number into
        bigArr.pop(); // Pop last value that is a 0
        bigctr = 0; // Set bigarr ctr back to 0
        ctr++; // Iterate ctr of smaller arr
        bigCheck++; // Add 1 index to bigger arr for adding new value
        console.log("nums1 eq: " + bigArr);
        console.log("bigctr: " + bigctr);
      }
      // Check greater than
      else if (subArr[ctr] > bigArr[bigctr]) {
        console.log("nums1 greater: " + bigArr);
        bigctr++;
        if (bigctr === bigCheck) {
          bigArr.splice(bigctr, 0, subArr[ctr]);
          bigArr.pop();
          bigctr = 0;
          ctr++;
          bigCheck++;
          console.log("nums1 greater bigcap: " + bigArr);
          console.log("bigctr bigcap: " + bigctr);
        }
      }
    }
    nums1 = bigArr;
  }
}

// Better solution
function mergeTwo(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (0 <= k) {
    const c1 = 0 <= i;
    const c2 = 0 <= j;
    if ((c1 && c2 && nums1[i] < nums2[j]) || !c1) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }
    k--;
  }
}
