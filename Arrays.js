//Arrays-An array is a data structure that stores a collection of elements. 
//In JavaScript, arrays are objects that have a length property that indicates the number of elements in the array. The elements of an array can be accessed using indexes, which are integers that start at 0.

//Traversing an array
const array=[10,20,30,40,50]
function traversearray(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i])
    }
}

console.log("Traversing array elements");
traversearray(array);
