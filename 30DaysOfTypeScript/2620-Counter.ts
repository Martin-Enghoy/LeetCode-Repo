function createCounter(n: number): () => number {
  const arr: number[] = [];
  let tempNumber = n;
  arr.push(tempNumber - 1);

  return function () {
    arr.push(arr[arr.length - 1] + 1);
    return arr[arr.length - 1];
  };
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
