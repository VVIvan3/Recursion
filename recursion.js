class RecursionFunctions {
  static iterativeFib(number) {
    let a = 1;
    let b = 1;
    let fibArray = [0, 1, 1];
    for (let i = 3; i < number; i++) {
      let c = a + b;
      a = b;
      b = c;
      fibArray.push(c);
    }
    return fibArray;
  }
  static recursiveFib(number, fibArray = [0, 1]) {
    if (number <= fibArray.length) {
      return fibArray;
    }
    return RecursionFunctions.recursiveFib(number, [ // copies array + adds new number, being sum of last and pre-last numbers
      ...fibArray,
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2],
    ]);
  }
}

console.log(RecursionFunctions.iterativeFib(8)); // [0, 1, 1, 2, 3, 5, 8, 13].
console.log(RecursionFunctions.recursiveFib(8));
