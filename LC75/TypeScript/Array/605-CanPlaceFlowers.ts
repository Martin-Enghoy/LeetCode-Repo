function InitialCanPlaceFlowers(flowerbed: number[], n: number): boolean {
  let idx = flowerbed.includes(1) ? flowerbed.indexOf(1) % 2 : 0;
  console.log("start:" + idx);
  let ctr = 0;
  // let ctr = 0;
  let ans = false;

  // if (flowerbed.length === 1 && flowerbed[0] === 0)  {
  //     return true;
  // }

  while (idx < flowerbed.length) {
    // Check for empty slot
    if (
      flowerbed[idx] === 0 &&
      flowerbed[idx + 1] !== 1 &&
      flowerbed[idx - 1] !== 1
    ) {
      console.log("ctr++:" + idx);
      ctr++;
    }

    // Check for min required slots
    if (ctr >= n) {
      return true;
    }

    idx += 2;
  }

  return false;
}
