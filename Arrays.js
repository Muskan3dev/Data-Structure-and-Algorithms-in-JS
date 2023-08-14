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

//Inserting an element in array
function insertelement(arr,index,element){
    if(index<0||index>arr.length){
        console.log("Invalid Index for Insertion");
    }
    for(let i=arr.length-1; i>=index;i--){
        arr[i+1]=arr[i];
    }
    arr[index]=element;
}
console.log("Inserting element 100 at index 2:");
insertelement(array, 2, 100);
traversearray(array);

//Deletion
function deleteElement(arr,index){
if(index<0||index>=array.length){
    console.log("Invalid index for deletion");
}
for(let i=index;i<array.length-1;i++){
    arr[i]=arr[i+1];
}
array.pop()
}
console.log("Deleting element at index 4:");
deleteElement(array, 4);
traversearray(array);
