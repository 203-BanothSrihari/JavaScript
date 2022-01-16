// the third argument, manymoreArgs, will be an array that contains
// the 3rd,4th,5th,6th....nth-- as many arguments that the user includes



function myFun(a,b,c,g, ...manyMoreArgs) // just define whatever you need elements then you will get output
{
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
   


    console.log("g",g)  // 'g' is not defined if it is defined then only we can output as 'g'
    console.log("manyMoreArgs", manyMoreArgs)

}

myFun("one","two","three","four","five","six")






// Another programme

function fun1(...theArgs)
{
    console.log(theArgs.length)
}
fun1()           //output 0
fun1(4)          //output 1
fun1(5,9,2)      //output 3
