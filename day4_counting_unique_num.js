// Counting Unique Numbers problem

function CountUniqueNumber(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is empty");
  }
}

const TotalUniqueNum = CountUniqueNumber([1, 3, 4, 4, 5,5, 6, 6, 7, 8, 9, 9, 22]);
console.log(TotalUniqueNum);
