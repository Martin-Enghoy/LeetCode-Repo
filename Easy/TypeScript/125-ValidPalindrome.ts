function isPalindrome(s: string): boolean {
  const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?` ]+/g;

  const cleanString = s.replace(regex, "").toLowerCase();

  if (cleanString.length === 0) {
    return true;
  }

  console.log(cleanString);

  let end: number = cleanString.length - 1; // End of string
  let start: number = 0; // Start of string

  // Loop start and end characters to check
  while (start !== cleanString.length - 1 && end !== 0) {
    console.log("iterate: " + cleanString[start] + " " + cleanString[end]);
    if (cleanString[start] !== cleanString[end]) {
      console.log(
        "Start Letter: " +
          cleanString[start] +
          " Last Letter: " +
          cleanString[end]
      );
      return false;
    }
    end--;
    start++;
  }

  return true;
}
