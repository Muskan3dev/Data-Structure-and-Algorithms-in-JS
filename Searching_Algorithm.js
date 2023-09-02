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
