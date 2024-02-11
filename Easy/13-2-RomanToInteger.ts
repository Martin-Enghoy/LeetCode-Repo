function romanToIntToo(s: string): number {
  let acc: number = 0;

  for (let i = 0; i < s.length; i++) {
    const char: string = s[i]; // Init each char
    let next: string = "";
    if (i < s.length - 1) {
      next = s[i + 1]; // Get the next char after index
    }
    switch (char) {
      case "I":
        if (next === "V") {
          acc += 4;
          i++;
        } else if (next === "X") {
          acc += 9;
          i++;
        } else {
          acc++;
        }
        break;
      case "V":
        acc += 5;
        break;
      case "X":
        if (next === "L") {
          acc += 40;
          i++;
        } else if (next === "C") {
          acc += 90;
          i++;
        } else {
          acc += 10;
        }
        break;
      case "L":
        acc += 50;
        break;
      case "C":
        if (next === "D") {
          acc += 400;
          i++;
        } else if (next === "M") {
          acc += 900;
          i++;
        } else {
          acc += 100;
        }
        break;
      case "D":
        acc += 500;
        break;
      case "M":
        acc += 1000;
        break;
      default:
        break;
    }
  }

  return acc;
}
