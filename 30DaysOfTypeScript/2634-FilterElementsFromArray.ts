type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  const farr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      farr.push(arr[i]);
    }
  }

  return farr;
}
