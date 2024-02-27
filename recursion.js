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
    return RecursionFunctions.recursiveFib(number, [
      // copies array + adds new number, being sum of last and pre-last numbers
      ...fibArray,
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2],
    ]);
  }

  static mergeSort(array) {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    const arrA = RecursionFunctions.mergeSort(array.slice(0, mid));
    const arrB = RecursionFunctions.mergeSort(array.slice(mid));
    return RecursionFunctions.merge(arrA, arrB);
  }

  static merge(arrA, arrB) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < arrA.length && j < arrB.length) {
      if (arrA[i] < arrB[j]) {
        mergedArray.push(arrA[i]);
        i += 1;
      } else {
        mergedArray.push(arrB[j]);
        j += 1;
      }
    }
    while (i < arrA.length) {
      mergedArray.push(arrA[i]);
      i += 1;
    }
    while (j < arrB.length) {
      mergedArray.push(arrB[j]);
      j += 1;
    }
    return mergedArray;
  }
}

console.log(RecursionFunctions.iterativeFib(8)); // [0, 1, 1, 2, 3, 5, 8, 13].
console.log(RecursionFunctions.recursiveFib(8));
console.log("--------");
const unsortedArray = [8, 3, 1, 4, 2, 5, 7, 6, 9]; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
const unsortedArrayTwo = [3, 2, 1, 13, 8, 5, 0, 1]; // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(RecursionFunctions.mergeSort(unsortedArray));
console.log(RecursionFunctions.mergeSort(unsortedArrayTwo));
