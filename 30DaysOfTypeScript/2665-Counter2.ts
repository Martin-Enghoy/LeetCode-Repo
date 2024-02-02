type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let tempNum = init;
  let ctr = tempNum;

  return {
    increment: () => {
      return (ctr = ctr + 1);
    },
    decrement: () => {
      return (ctr = ctr - 1);
    },
    reset: () => {
      return (ctr = tempNum);
    },
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
