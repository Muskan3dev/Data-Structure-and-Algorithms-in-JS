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
  