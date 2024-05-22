function reverseVowels(s: string): string {
  const vowels = "aeiouAEIOU";
  let tempVal;
  let left = 0;
  let right = s.length - 1;
  let arr = s.split("");

  while (left <= right) {
    // Both Vowels
    if (vowels.includes(arr[left]) && vowels.includes(arr[right])) {
      tempVal = arr[left]; // Assign to temp
      arr[left] = arr[right]; // Put front to back
      arr[right] = tempVal; // Put back to front
      left++; // Iterate front
      right--; // Iterate back
    }
    // Iterate Left if not a vowel
    else if (!vowels.includes(arr[left])) {
      left++;
    }
    // Iterate Right if not a vowel
    else {
      right--;
    }
  }

  return arr.join("");
}
