function kthCharacter(k: number, operations: number[]): string {
  let ans = 0;

  while (k !== 1) {
    let bit = Math.floor(Math.log2(k));
    // console.log('start bit value: ', bit);
    // console.log('BigInt(bit): ', BigInt(bit));
    // console.log('1n << BigInt(bit): ', 1n << BigInt(bit));
    // console.log('start bit value: ', Number(1n << BigInt(bit)));
    if (Number(1n << BigInt(bit)) === k) {
      bit--;
    }
    // console.log('mid bit value: ', bit);

    k -= Number(1n << BigInt(bit));

    // console.log('k value: ', k);

    if (operations[bit]) {
      ans++;
    }
    // console.log('ans value: ', ans);
  }

  return String.fromCharCode('a'.charCodeAt(0) + (ans % 26));
}
