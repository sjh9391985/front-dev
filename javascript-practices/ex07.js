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
