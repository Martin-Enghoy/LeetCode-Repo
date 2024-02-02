type F = (x: number) => number;

function compose(functions: F[]): F {
  const funcarr: F[] = functions;

  return function (x) {
    let out: number = x;

    if (funcarr.length === 0) {
      return x;
    }

    for (let i = funcarr.length - 1; i >= 0; i--) {
      out = funcarr[i](out);
    }

    return out;
  };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
