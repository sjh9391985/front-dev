/*
    function type의 객체
*/

// 1. 함수를 생성하는 방법1
function f1(a,b){
    return a+b;
}
console.log("type:" + typeof(f1) , f1(10,20));

// 2. 함수를 생성하는 방법2 : literal ==> 제일 추천하는 방법
var f2 = function(a,b){
    return a+b;
}
console.log("type:" + typeof(f2) , f2(10,20));

// 3. 함수를 생성하는 방법3 : new 연산자와 함께 Function() 생성
var f3 = new Function("a", "b", "return a+ b;");
console.log("type:" + typeof(f3) , f3(10,20));


// 4. 함수를 생성하는 방법4 : 익명(Anonymous) 함수
// callback
setTimeout(function(data){
    console.log("time out!");
} ,1000);

// 즉시 실행 하는 함수
var s = (function(a,b){
    return a+b;
})(10,20); //익명함수 실행.
console.log(s);

// 가변 파라미터 함수
var sum = function(){
    var s = 0;
    // arguments는 Array가 아니다. 유사 배열.
    console.log(arguments instanceof Array);
    
    // 구현 1
    for(var i = 0; i < arguments.length; i++){
        s += arguments[i];
    }
    return s;


// 구현 2(Array.prototype.forEach + caller 바꾸기)
Array.prototype.forEach.call(arguments, function(e){
    s += e;
})
    return s;
}