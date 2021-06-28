/*
    자바스크립트 객체 4 - prototype 기반의 상속, 오버라이딩(객체스크립트)
*/

var MyObject = function(name, age){
    this.name = name;
    this.age = age;
}
MyObject.prototype.school = "bit";
MyObject.prototype.course = "douzone";
MyObject.prototype.info = function(){
    console.log(this.name + " : " + this.age + " : " + this.school + " : " + this.course);
}

// MyObject 객체 생성 1
var obj1 = new MyObject("둘리", 10);
obj1.school = "multicampus" // 오버라이딩
obj1.info();

// MyObject 객체 생성 2
var obj2 = new MyObject("마이콜", 20);
obj2.info();

// 오버라이딩
obj2.info = function(){
    console.log("비밀!!");
}
obj2.info();