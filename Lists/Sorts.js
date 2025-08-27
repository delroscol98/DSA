/////////////////////////////////////////////////////////
// UTILITIES

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return array;
}

/////////////////////////////////////////////////////////
// HEAP SORT

function heapify(array, index, heapSize) {
  // code
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largestValueIndex = index;

  if (heapSize > left && array[largestValueIndex] < array[left]) {
    largestValueIndex = left;
  }

  if (heapSize > right && array[largestValueIndex] < array[right]) {
    largestValueIndex = right;
  }

  if (largestValueIndex !== index) {
    swap(array, index, largestValueIndex);
    heapify(array, largestValueIndex, heapSize);
  }
}

function createMaxHeap(array) {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
}

function heapSort(array) {
  // code
  array = createMaxHeap(array);
  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    heapify(array, 0, i);
  }
  return array;
}

/////////////////////////////////////////////////////////
// RADIX SORT
function getDigit(num, i, longestNumber) {
  const string = num.toString();
  const mod = longestNumber - string.length;

  return string[i - mod] || 0;
}

function findLongestNumber(array) {
  let longest = 0;
  for (let i = 0; i < array.length; i++) {
    let size = array[i].toString().length;
    longest = size > longest ? size : longest;
  }
  return longest;
}

function radixSort(array) {
  const longestNum = findLongestNumber(array);
  const buckets = new Array(10).fill().map(() => []);

  for (let i = longestNum - 1; i >= 0; i--) {
    while (array.length) {
      let num = array.shift();
      buckets[getDigit(num, i, longestNum)].push(num);
    }

    for (let i = 0; i < buckets.length; i++) {
      while (buckets[i].length) {
        array.push(buckets[i].shift());
      }
    }
  }

  return array;
}
/////////////////////////////////////////////////////////
// COUNTING SORT

function countingSort(array) {
  const maxVal = Math.max(...array);
  const countArr = new Array(maxVal + 1).fill(0);
  const res = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    countArr[array[i]]++;
  }

  for (let i = 0; i < maxVal; i++) {
    countArr[i] += countArr[i - 1];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    res[countArr[array[i]] - 1] = array[i];
    countArr[array[i]]--;
  }

  return array;
}

/////////////////////////////////////////////////////////
// QUICK SORT

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, i, swapIndex);
    }
  }
  swap(array, swapIndex, pivotIndex);
  return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

/////////////////////////////////////////////////////////
// MERGE SORT

function merge(arr1, arr2) {
  let combined = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i]);
      i++;
    } else {
      combined.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }

  return combined;
}

function mergeSort(array) {
  if (array.length === 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function selectionSort(array) {
  let min;
  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    if (min !== i) {
      swap(array, min, i);
    }
  }
  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    for (var j = i - 1; array[j] > temp && j >= 0; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }

  return array;
}

function bubbleSort(array) {
  let swapped;
  for (let i = array.length - 1; i >= 0; i--) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (array[j + 1] < array[j]) {
        swap(array, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////////
// DON'T CHANGE CODE BELOW
let count = 0;
let result = [];

while (count < 100) {
  result.push(Math.floor(Math.random() * 100));
  count++;
}

console.log(result);
console.log(bubbleSort(result));
console.log(insertionSort(result));
console.log(selectionSort(result));
console.log(mergeSort(result));
console.log(quickSort(result));
console.log(countingSort(result));
console.log(radixSort(result));
console.log(heapSort(result));
