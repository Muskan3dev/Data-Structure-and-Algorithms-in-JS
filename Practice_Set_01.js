//Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

//solution
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const charCount = {};
  
    for (let char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    
    for (let char of str2) {
      if (!charCount[char]) {
        return false;  
      }
      charCount[char]--;
    }
  
    return true;
  }
  console.log(validAnagram('', '')); 
console.log(validAnagram('aaz', 'zza')); 

