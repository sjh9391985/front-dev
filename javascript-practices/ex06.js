/*
    자바스크립트 객체 3
*/

var obj = {
    name : "둘리",
    age: 10,
    isFemale: false
}

console.log(obj);
console.log(obj.name + " : " + obj.age +" : " + obj.isFemale);
console.log("======= 객체의 확장 =======");
obj.another = {
    name:"마이콜",
    age:30
}

var f = function(){
    console.log("Hello world");
}
f();
console.log(obj);
console.log(obj.another.name + " : " + obj.another.age );

f.another = {
    name:"마이콜",
    age:30,
    info : function(){
        console.log(this.name + " : "+ this.age);
    }
};
console.log(f.another);
f.another.info();

var i1 = 10;
var i2 = new Number(10);
console.log("======= 기본 타입은 확장X =======");
i2.another = {};
console.log(i2);

i1.another = {};
console.log(i1.another); //원시타입이여서 객체 접근을 할때 객체로 변환하여 적용하려는데 접근이 X

