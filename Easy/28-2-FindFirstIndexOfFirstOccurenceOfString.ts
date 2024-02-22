function strStr(haystack: string, needle: string): number {
  let start: number = 0;
  let end: number = needle.length;

  // Check for null in array
  if (!haystack.includes(needle)) {
    return -1;
  }

  // Check for less than
  if (needle.length > haystack.length) {
    return -1;
  }

  while (start < haystack.length && end < haystack.length) {
    if (haystack.substring(start, end) === needle) {
      break;
    } else {
      start++;
      end++;
    }
  }

  // Check for overflow
  if (end > haystack.length) {
    return -1;
  }

  return start;
}
