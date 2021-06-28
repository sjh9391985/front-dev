// 변수의 범위(scope)
// 1. JavaScript는 어휘에서 범위를 알 수 있는 정적 범위(Lexical scope)이다.
// 2. EC6 이전)
//           JavaScript는 자바와 같은 block scope은 지원하지 않았다.
//           함수 범위(function scope)만 지원 했었다.
//           function의  {} 안에서 변수 앞에 var 키워드를 하면 함수 범위를 가지게 된다.
//           만일, var 키워드 없이 변수를 정의하면 전역 범위를 가지게 된다(Hoisting) 
// 3. EC6 에서)
//            새롭게  Block Scope를 가지게 하는
//            1. let : 변수
//            2. const : 상수
//            두 키워드를 지원한다.

var i = 10;
var f = function(){
    var i = 20;
    j = 100; // var가 붙어있지 않기에 global scope를 가질수 있음
    console.log(i);
    i = j-1;
}

{
    let x = 100;
    const PI = 3.14; // -> PI = 3.15로 수정하면 Error, 상수이기 때문에 오류남.
    x = 100;
}
console.log(x); //error: 접근불가.

f();
console.log(i);
console.log(j);
