//convert string value to Number OR Boolean

let strValue="Javascript";
console.log(strValue);//Javascript
console.log(typeof(strValue));//string


let strValue1="10";
//////////////////////////////////////////////////////////////

//convert string value to number
let intValue=Number(strValue);
console.log(intValue);//NAN
console.log(typeof(intValue));//number
//string has character and cannot be converted
// to number. so we get NAN but its data type is now number

let intValue1=Number(strValue1);
console.log(intValue1);//10
console.log(typeof(intValue1));//number
//here string has number value so it got converted to number.
///////////////////////////////////////////////////////////////////

//convert string  to boolean
let boolValue=Boolean(strValue);
console.log(boolValue);//true
console.log(typeof(boolValue));//boolean
// boolean value are 0=false 1=true...
//here as there is no 0 value we get true.

