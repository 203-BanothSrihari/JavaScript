// Copy by reference 


let fruits=["banana"];
let arr=fruits; //copy by reference (two variables reference the same array)
 
console.log( arr === fruits ); //true
arr.push("pear"); //modify the arra by reference
console.log( fruits ); //banana, pear  ---2 items
 

 
 //Loops
let arr=["pine","banana","pear"];

for(let i=0;i<arr.length;i++)
{
     console.log(arr[i]);

}

 //But for arrays there is another form of loop, for..of:
 let fruits=["pine","banana","cherry"];
 
 //iterates over array elements
for(let fruit of fruits)
{
     console.log(fruit);
}



