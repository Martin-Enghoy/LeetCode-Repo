function plusOne(digits: number[]): number[] {
  let arr: number[] = digits;
  let ctr: number = arr.length - 1;

  if (arr.length === 1) {
    if (arr[ctr] === 9) {
      return [1, 0];
    } else {
      arr[ctr]++;
      return arr;
    }
  }

  while (ctr >= 0) {
    // Increment non-9 number
    if (arr[ctr] < 9) {
      arr[ctr]++;
      break;
    }

    // Carry 1 to next
    if (arr[ctr] === 9 && ctr === 0) {
      arr[ctr] = 0;
      arr.splice(0, 0, 1); // Add 1 to the left index of current loc
      ctr--;
    } else if (arr[ctr] === 9 && arr[ctr - 1] !== 9) {
      arr[ctr] = 0;
      arr[ctr - 1]++;
      break;
    } else {
      arr[ctr] = 0;
      ctr--;
    }
  }

  return arr;
}
