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
  