function toInt(char) {
  // Convert the character to lowercase to handle both 'A' and 'a'
  const lowerChar = char.toLowerCase();

  // Get the Unicode (ASCII) value of 'a'
  const asciiOfA = 'a'.charCodeAt(0);

  // Get the Unicode (ASCII) value of the input character
  const asciiOfChar = lowerChar.charCodeAt(0);

  // Calculate the integer equivalent (e.g., 'a' - 'a' + 1 = 1)
  return asciiOfChar - asciiOfA + 1;
}

function kthCharacter(k) {
  let str = ['a'];

  while (str.length < k) {
    const next = [];

    for (const char of str) {
      const curr = toInt(char);
      const first = toInt('a');

      const calcStr = String.fromCharCode(65 + ((curr - first + 1) % 26)).toLowerCase();

      next.push(calcStr);
    }

    str = [
      ...str,
      ...next,
    ];
  }

  return str[k - 1];
}
