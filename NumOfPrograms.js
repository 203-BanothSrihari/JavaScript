// check wether the given string is palindrome or not
let str ='madam'
function reverse()
{
    let myReverseStr='';
    for(let i=str.length-1; i>=0;i--)
    {
        myReverseStr += str.charAt(i);
    }
    return myReverseStr;
}
console.log(reverse());

if(str === reverse())
{
    console.log("it's a palindrome");
}
else{
    console.log("it's not a palindrome");
}




// program to reverse a string
var string = "hello";
console.log(string);
var output=string.split('').reverse().join('');
console.log(output);



//take input as "srihari name" then output will be "name srihari"

var string1 = "srihari & name";  //srihari name
var arr= string1.split("&");
console.log(arr[1],arr[0]);  //name srihari




//if phone number is "+918464857919" output like "+91 8464857919"
function mobile()
{
    let value="+918464857919";
    let a = value.slice(0,3);
    let b =value.slice(3,14);
    return a+" "+b;
}

console.log(mobile());


// to find duplicate of an array

checkDuplicate();
   function checkDuplicate() {
      let arr = ["abc","xy","bb", "axz", "abc"];
      // empty object
      let map = {};
      let result = false;
      for(let i = 0; i < arr.length; i++) {
         // check if object contains entry with this element as key
         if(map[arr[i]]) {
            result = true;
            // terminate the loop
            break;
         }
         // add entry in object with the element as key
         map[arr[i]] = true;
      }
      if(result) {
         console.log('Array contains duplicate elements');
      } else {
         console.log('Array does not contain duplicate elements');
      }
   }




   //duplicate2 program

   const a = [4,3,6,3,4,3]

function count_duplicate(a){
 let counts = {}

 for(let i =0; i < a.length; i++){ 
     if (counts[a[i]]){
     counts[a[i]] += 1
     } else {
     counts[a[i]] = 1
     }
    }  
    for (let prop in counts){
        if (counts[prop] >= 2){
            console.log(prop + " counted: " + counts[prop] + " times.")
        }
    }
  console.log(counts)
}

count_duplicate(a)
/*  3 counted: 3 times.
    4 counted: 2 times.
    { '3': 3, '4': 2, '6': 1 }
*/