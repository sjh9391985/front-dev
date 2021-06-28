/*  
    자바스크립트 객체 1 - Object
    1. 자바스크립트 객체는 function 타입과 object 타입 2가지가 있다.

    2. 보통 function 타입 객체는 "함수"라고 부른다.

    3. 따라서! 자바스크립트 객체라 부르는 것은 object 타입의 객체를 가르킨다.
 */


// [생성 방법-1]
// 생성자 함수 사용.(내장객체라고 불림)
// Number(), Boolean(), String(), Object(), Array()...
// 내장객체(==생성자 함수)
// 그리고 사용자 정의 생성자 함수
    /*var Goods = function(price){ 
        this.price = price;
    }; var goods = new Goods(1000);
    */
   
var obj1 = new Object();
obj1.name = "둘리";
obj1.age = 10;
obj1.another = new Object();
obj1.another.name = "마이콜";
obj1.another.age = 30;
console.log(obj1); //-> 결과: { name: '둘리', age: 10, another: { name: '마이콜', age: 30 } }

// [생성 방법-2] (생성방법 1과 결과는 동일.)
// {} literal 사용하는 방법
obj2 = {};
obj2.name = "둘리";
obj2.age = 10;
obj2.another = new Object();
obj2.another.name = "마이콜";
obj2.another.age = 30;
console.log(obj2);  //-> 결과: { name: '둘리', age: 10, another: { name: '마이콜', age: 30 } }

// [생성 방법-3]
// JSON(Java Script Object Notation)
obj3 = {
    name: "둘리",
    age: 10,
    another: {
        name: "마이콜",
        age: 30
    }
}
console.log(obj3);
console.log("================================");

/* XmlHttpRequest 호스트 객체(브라우저) 사용해서 통신을 한다. */
var response = '{name: "둘리", age: 10, email: "dooly@gmail.com"}'
var userVo = eval("("+response+")");
console.log(userVo.name+" : "+userVo.age +" : "+userVo.email);