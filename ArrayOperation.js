//There are two syntaxes for creating an empty array:
let arr = new Array();
let arr = [];

//Almost all time, the  second syntax is used, we can supply initial elements in the brackets:

let fruits = ["Pine", "Banana","Cherry"];

// We can get an element by its number in square brackets:

let fruits = ["Pine","Banana","Cherry"];
console.log( fruits[0] );    //Pine
console.log( fruits[1] );  //Banana
console.log( fruits[2] );  //Cherry

// we can replace an element:

fruits[2] = 'Pear'; //now ["pine","banana","pear"]

// ..or add a new one to the array:

fruits[3] = 'Lemon';  //now ["Pine", "Banana", "Pear", "Lemon"]

//The total count of the elements in the array is its length:

let fruits = ["Pine", "Banana", "Cherry"];
console.log(fruits.length);  //3