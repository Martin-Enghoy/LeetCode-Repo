function isSubsequence(s: string, t: string): boolean {
  let sidx = 0;
  let tidx = 0;

  // Check for empty sub
  if (s.length < 1) {
    return true;
  }
  // Check for both empty
  if (s.length < 1 && t.length < 1) {
    return true;
  } else if (s.length === 1 && t.length === 1) {
    if (s[0] === t[0]) {
      return true;
    } else {
      return false;
    }
  }

  while (tidx < t.length) {
    // Check if same, iterate both
    if (s[sidx] === t[tidx]) {
      sidx++;
      tidx++;
    }
    // Otherwise, iterate longer string
    else {
      tidx++;
    }
    console.log(sidx, tidx);

    // Return true if sidx reached the last index
    if (sidx === s.length) {
      return true;
    }
  }

  return false;
}
