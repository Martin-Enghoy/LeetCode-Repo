function possibleStringCount(word) {
  let ans = 0;
  let len = new Map();

  if (word.length === 1) {
    return 1;
  }

  for (let i = 0; i < word.length; i++) {
    if (i !== 0 && len.get)
  }

  for (let ch of word) {
    if (len.get())
      len.set(ch, (len.get(ch) || 0) + 1);
    const prev = ch;
  }

  console.log('len: ', len);

  console.log('Map.values(len): ', len.values());

  const freq = [...len.values()];

  console.log('freq: ', freq);

  let uniqFreq = [...new Set(freq)];

  console.log('uniqFreq: ', uniqFreq);

  if (Math.max(...uniqFreq) === 1) {
    return 1;
  } else {
    uniqFreq = uniqFreq.filter((num) => num !== 1);
  }

  console.log('uniqFreq filtered: ', uniqFreq);

  for (let i = 0; i < uniqFreq.length; i++) {
    if (i === 0) {
      ans += uniqFreq[i];
    } else {
      ans += uniqFreq[i] - 1;
    }
  }

  // for (const [idx, num] of uniqFreq) {
  //     if (idx === 1) {
  //         ans += num;
  //     } else {
  //         ans += num - 1;
  //     }
  // }

  return ans;
};
