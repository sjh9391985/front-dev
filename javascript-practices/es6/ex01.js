/*
    1. let : Block Scope 변수 정의
*/ 
try{
    if(true){
        var i = 10;
        let j = 20;
    }
    console.log(i, j);
} catch(e){
    console.error(e);
}

// var 함수 범위
try{
    var f = function(){
        var m = 20;
    }
    f();
    console.log(m);
}catch(e){
    console.log(e);
}

