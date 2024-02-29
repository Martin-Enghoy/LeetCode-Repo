/**
 *
 * @runtime 57ms    79.55%
 * @memory  54.48MB 5.17%
 */

function isValid(s: string): boolean {
  const str: string = s;
  const arr: string[] = [];
  let ctr: number = 0;

  // Odd Length string check
  if (arr.length % 2 !== 0) {
    return false;
  }

  while (ctr < str.length) {
    // Push initial
    if (ctr === 0) {
      arr.push(str[ctr]);
      ctr++;
    }

    // Popping or pushing
    if (arr[arr.length - 1] === "{" && str[ctr] === "}") {
      arr.pop();
    } else if (arr[arr.length - 1] === "[" && str[ctr] === "]") {
      arr.pop();
    } else if (arr[arr.length - 1] === "(" && str[ctr] === ")") {
      arr.pop();
    } else {
      arr.push(str[ctr]);
    }

    ctr++;
  }

  // Arr contains leftover string
  if (arr.length !== 0) {
    return false;
  }

  return true;
}
