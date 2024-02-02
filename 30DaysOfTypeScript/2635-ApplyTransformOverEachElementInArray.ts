function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const r: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    r.push(fn(arr[i], i));
  }

  return r;
}
