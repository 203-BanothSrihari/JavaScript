var x=1;
let y=2;
  

if(true){
var x=2;
let y=2;
}
console.log(x);
//expected output 2

console.log(y);
//expected output 1
/*here let is like private that is in if condition only y value is 
   not changed and after if condition the value value is must be same
   and if you change after first declaration is we the value is changed.*/