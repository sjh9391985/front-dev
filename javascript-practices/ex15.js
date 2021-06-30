console.log("==== global ====");
global.name = "dooly";  
console.log(name, global.name);
var email = "dooly@gmail.com";
console.log(email, global.email);

console.log("==== function 객체 메서드 apply ====");

var f1 = function(){
    console.log(this);
}
f1()

// this change
var obj = {
    name : "마이콜"
}
f1.apply(obj);


console.log("==== function 객체 메서드 call ====");
var f2 = function(s){
    console.log(s +" "+ this.name);
}
f2.call(obj, "hello");
