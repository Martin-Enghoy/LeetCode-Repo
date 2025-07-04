function kthCharacter(k, operations) {
  let word = 'a';

  while (word.length < k) {
    for (let op = 0; op < operations.length; op++) {
      let len = word.length;
      if (operations[op] === 1) {
        for (let i = 0; i < len; i++) {
          if (String.fromCharCode(word.charCodeAt(i)) === 'z') {
            word += 'a';
          } else {
            word += String.fromCharCode(word.charCodeAt(i) + 1);
          }
        }
      } else {
        const temp = `${word}${word}`;
        word = temp;
      }

      if (word.length > k) {
        break;
      }

      console.log('word: ', word);
    }
  }

  return word[k - 1];
}
