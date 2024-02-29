function romVal(char: string): number {
  const str: string = char;
  let value: number = 0;

  switch (str) {
    case "I":
      value = 1;
      break;
    case "V":
      value = 5;
      break;
    case "X":
      value = 10;
      break;
    case "L":
      value = 50;
      break;
    case "C":
      value = 100;
      break;
    case "D":
      value = 500;
      break;
    case "M":
      value = 1000;
      break;
    default:
      break;
  }

  return value;
}

function romanToInt(s: string): number {
  let acc: number = 0; // Declare base number
  const roman: string = s; // Local declaration

  let index: number = 0; // Initialize iterator for string
  let next: number = 1;

  if (roman.length === 1) {
    return romVal(roman);
  }

  while (index < roman.length) {
    // When not equal, add left to acc
    console.log(romVal(roman[index]));
    console.log(romVal(roman[next]));

    if (romVal(roman[index]) < romVal(roman[next])) {
      console.log("SUB");
      acc += romVal(roman[next]) - romVal(roman[index]);
      index += 2;
      next += 2;
    } else {
      console.log("ADD");
      acc += romVal(roman[index]);
      index++;
      next++;
    }

    console.log(acc);
  }

  return acc;
}
