// String

// 배열처럼 접근 가능
var str1 = "Hello World";
for(var i =0; i <str1.length; i++){
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = "Hello";
var str3 = "World";
var str4 = str2 + " " + str3;
console.log(str4);

// 캐스팅 (문자로 캐스팅)
var str5 = 5 + "5";
console.log(str5);

var str6 = "boolean" + true;
console.log(str6);

// 메서드
var str7 = "string1 string2 string3";
console.log(str7.length);

var str8 = str7.substr(10) // 10번째부터 끝까지
console.log(str8);

var str9 = str7.substr(10,3) // 10번째부터 3개만 가져옴
console.log(str9);

var str10 = str7.substr(10,13) // ??
console.log(str10);

var a = str7.split(" ");
console.log(a);

var str11 = "abcdef";
var a = str11.split(":");
console.log(a);
