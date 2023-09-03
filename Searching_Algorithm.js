//linear search
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

const numbers = [5, 2, 8, 10, 3, 7];
const targetVal = 8;

const result = linearSearch(numbers, targetVal);

if (result !== -1) {
  console.log(`Value ${targetVal} found at index ${result}`);
} else {
  console.log(`Value ${targetVal} not found in the array`);
}
//Binary Search
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return mid; // Element found, return its index
    } else if (arr[mid] < val) {
      left = mid + 1; // Adjust the search range to the right half
    } else {
      right = mid - 1; // Adjust the search range to the left half
    }
  }

  return -1; // Element not found
}

const sortedArray = [2, 4, 7, 10, 15, 18, 20, 25, 30];
const targetValue = 15;

const result2 = binarySearch(sortedArray, targetValue);

if (result !== -1) {
  console.log(`Value ${targetValue} found at index ${result}`);
} else {
  console.log(`Value ${targetValue} not found in the array`);
}

//Bubble Sort
function bubbleSort(arr) {
  const arrayLength = arr.length;
  let swap;

  do {
    swap = false;

    for (let currentIndex = 0; currentIndex < arrayLength - 1; currentIndex++) {
      if (arr[currentIndex] > arr[currentIndex + 1]) {
        const temp = arr[currentIndex];
        arr[currentIndex] = arr[currentIndex + 1];
        arr[currentIndex + 1] = temp;
        swapped = true;
      }
    }
  } while (swap);

  return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const SortedArray = bubbleSort(unsortedArray);

console.log("Sorted Array:", SortedArray);

//Insertion Sort
function insertionSort(arr) {
  const arrayLength = arr.length;

  for (let currentIndex = 1; currentIndex < arrayLength; currentIndex++) {
    const currentElement = arr[currentIndex];
    let comparisonIndex = currentIndex - 1;

    while (comparisonIndex >= 0 && arr[comparisonIndex] > currentElement) {
      arr[comparisonIndex + 1] = arr[comparisonIndex];
      comparisonIndex--;
    }

    arr[comparisonIndex + 1] = currentElement;
  }

  return arr;
}

const UnsortedArray = [64, 34, 25, 12, 22, 11, 90];
const Sortedarray = insertionSort(UnsortedArray);

console.log("Sorted Array:", Sortedarray);

//Selection Sort
function selectionSort(arr) {
  const arrayLength = arr.length;

  for (let currentIndex = 0; currentIndex < arrayLength - 1; currentIndex++) {
    let minIndex = currentIndex;

    for (
      let searchIndex = currentIndex + 1;
      searchIndex < arrayLength;
      searchIndex++
    ) {
      if (arr[searchIndex] < arr[minIndex]) {
        minIndex = searchIndex;
      }
    }

    // Swap the found minimum element with the element at currentIndex
    if (minIndex !== currentIndex) {
      const temp = arr[currentIndex];
      arr[currentIndex] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

const UnSortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedarray = selectionSort(UnSortedArray);

console.log("Sorted Array:", sortedarray);

//Merge Sort
function mergeSort(arr) {
  //Base Case
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const middleIndex = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middleIndex);
  const rightHalf = arr.slice(middleIndex);

  // Recursively sort each half
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and add the smaller element to the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const unsortedArr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = mergeSort(unsortedArr);

console.log("Sorted Array:", sortedArr);

//Quick sort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(Math.random() * arr.length)]; // Randomly select a pivot
  const left = [];
  const equal = [];
  const right = [];

  for (const element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element === pivot) {
      equal.push(element);
    } else {
      right.push(element);
    }
  }

  return quickSort(left).concat(equal, quickSort(right)); // Recursively sort and combine the three subarrays
}

const unsortedarr = [64, 34, 25, 12, 22, 11, 90];
const sortedarr = quickSort(unsortedarr);

console.log("Sorted Array:", sortedarr);

//Radix sort
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}


function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Find the maximum number of digits in an array of integers
function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  const maxDigits = mostDigits(arr);

  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

const UNSORTEDARR = [999,150,180,250,270,450,230,89];
const SORTEDARR = radixSort(UNSORTEDARR)

console.log("Sorted Array:", SORTEDARR);
