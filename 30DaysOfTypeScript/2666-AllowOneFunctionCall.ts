type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
  let ctr: number = 0;
  // let isCalled: boolean = false;

  return function (...args) {
    // while (!isCalled) {
    //     isCalled = true
    //     return fn(...args)
    // }

    // for (let i = 0; i < args.length; i++) {
    //     if (ctr > 0) {
    //         return undefined;
    //     }
    //     // const call = fn(...args[i])
    //     ctr + 1;
    //     return fn(...args);
    // }

    if (ctr > 0) return undefined;
    ctr++;
    return fn(...args);

    // const call = fn(...args)
    // ctr + 1;
    // return call;
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
