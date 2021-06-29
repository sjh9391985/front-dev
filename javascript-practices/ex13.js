// Date

// 현재 시간
var now = new Date();
console.log(now);

// 2021년 6월 29일
var d1 = new Date(2021, 5 /*month - 1*/, 29);
console.log(d1);

// 2021년 6월 29일 12:30:40
var d2 = new Date(2021, 5 , 29, 12, 30, 40);
console.log(d2);

// 객체 메소드
console.log("년도: "+ (d2.getYear() + 1900) + " 월: " + (d2.getMonth() +1) + " 일: " + d2.getDate()  + " 시: " + d2.getHours()  + " 분: " + d2.getMinutes()  + " 초: " + d2.getSeconds() + " 밀리초: " + d2.getMilliseconds());

d2.setFullYear(2022);
console.log(d2);
d2.setMonth(11) // 12월 - 1
console.log(d2);