// function checkPal(num: string, index: number): boolean {
//     let pal: boolean = false;
//     const n = num.length;

//     let left = index;
//     let right = index;

//     while (0 <= left && right < n && num[left] == num[right]) {
//         pal = true;
//     }

//     return pal;
// }

function isPalindrome(x: number): boolean {
  // let pal: boolean = false;
  let left: number = 0;
  const num: string = x.toString();

  // Negative Check
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }

  // Single-Digit Check
  if (x < 10) {
    return true;
  }

  // for (let i = 0; i < num.length; i++) {
  //     pal = checkPal(num, i)
  // }

  // Get Midpoint
  const mid: number = Math.floor(num.length / 2) - 1;

  // Check boundary letters
  for (let right = num.length - 1; right > mid; right--) {
    const s1 = num[left];
    const s2 = num[right];

    if (s1 !== s2) return false;

    left++;
  }

  return true;
}
