/* "null"  vs "undefined" */
//var myVar1 = undefine; 명시적으로 undefined 대입.
var myVar1;            //암시적으로 undefined 대입. 변수타입 var없이 myVar1만 단독선언은 안됨.
var myVar2 = null;
console.log(myVar1+ " : " + myVar2);
console.log(typeof(myVar1)+ " : "+typeof(myVar2));
console.log(myVar1 == myVar2); //값 비교.
console.log(myVar1 === myVar2); //타입비교, 값비교.
console.log("===================");

// "== : equality, 값의 등치성, 형변환 o"
console.log(4 == "4");
console.log(true == 1);
console.log(false == 0);
console.log("abc" == new String("abc"));    // => true
console.log("abc" === new String("abc"));   // => false
console.log(true + 10);
console.log("abc" + new String("abc"));

console.log(1 + "1"); // => 정수 1을 String으로 변환하여 계산결과 나옴.
// *추천방식  
// 1. 엄격한 형변환을 통하여 두 피연산자의 타입을 개발자가 작성하도록 한다.
var str = "5";
console.log(parseInt(str) == 5);
console.log("===================");

// "=== : identity "
// 1. 타입의 동일성
// 2. 값의 동일성 또는 객체의 동일성 
// 형변환 X
console.log("2" === 2);
console.log(true === 1);
console.log(new Number(4) === new Number(4));

