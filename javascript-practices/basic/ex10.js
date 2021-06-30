// Array 확장: List 메소드 추가(prototype 확장)

Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        //for(var i = 0; i < value.length; i++){
        //    this.splice(index, 0 , value[i])
        //    index++;
        var _this = this;
        value.forEach(function(e){
        _this.splice(index++, 0 , e);
        });    
    }else{
        this.splice(index,0,value);
    }
}

// 리스트로 사용하기
var a = [1, 2, 4];

console.log(a);
a.insert(2, 3);
console.log(a);

// splice remove 기능 사용하기
Array.prototype.remove = function(index){
    this.splice(index, 1);
}
a.remove(3);
console.log(a);

a.insert(2, ['a', 'b', 'c']); 
console.log(a);


var f = function(){
    console.log(this);
}

//call 과 apply의 차이점: call은 파라미터를 넣어서 사용가능하지만 apply는 바인딩 기능만한다.
o = {name: "me!!"};
f.call(o); // this가 o로 바인딩되면서 함수실행
f.apply(o); 
