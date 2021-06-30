/*
    6. Destructuring(구조분해)
*/

//ex1 - basic
let firstName;
let lastName;

const user = {
    firstName : "둘",
    lastName : "리",
    email : "dooly@gmail.com"
};

({firstName, lastName} = user);
console.log(firstName, lastName);

//ex2 - Default
const goods = {
    name : "TV",
    price : 10000,
    stockCount : 30
}

let {name, price, soldCount = 0 , stockCount = 0} = goods;
console.log(name, price, soldCount, stockCount);

//ex3 - Different Variable Names
const person = {
    name: '손재현',
    country : "korea"
}
let {name: fullName, country: place} = person
console.log(fullName, place);

// ex4 - 내부 객체(Nested Object)의 구조 분해.
const student = {
    name: "둘리",
    age : 10,
    scores : {
        maths : 90,
        korean : 79,
        science : 100
    }
}

const {
    name : studentName,
    scores: {
        maths = 0,
        korean = 0,
        science = 0,
        music = 0
    }
} = student;
console.log(`${studentName}의 성적: 수학: ${maths}, 국어: ${korean}, 과학: ${science}, 음악: ${music}`);

// ex5 - 함수의 파라미터
var averageScore = function({
    name,
    scores: {
        maths = 0,
        korean = 0,
        science = 0,
        music = 0
    }    
})
{
console.log(`${name}의 평균은 ${(maths + korean + science + music)/4}점 입니다.`); 
}

console.log(averageScore(student)); //출력: 둘리의 평균은 90점 입니다.

// ex6 - 배열의 구조분해
const colors = [155, 200, 87];
[red, green, blue] = colors;
console.log(red, green, blue);

// ex7 - 배열의 구조분해 디폴트 값
[red=0, green=0, blue=0, alpha=0] = colors;
console.log(red, green, blue, alpha);

// ex8 - skip values
[,,colorOfBlue=0] = colors;
console.log(colorOfBlue);

// ex9 - swap values
let x = 10;
let y = 20;
console.log(x, y);
let temp = x;
x = y; 
y = temp;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);

// ex10 - ...array spread operator
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'Indigo', 'purple']
let [firstColor, secondColor, thirdColor, ...otherColors] = rainbow;
console.log(firstColor, secondColor, thirdColor,  otherColors);

console.log("Colors of Rainbow: ", rainbow );
console.log("Colors of Rainbow: ", ...rainbow);

// red:orange:yellow:green 
/*var f = function(...colors){ //=> 배열에 배열로 나옴.
    //console.log(arguments);
    //console.log(colors);
    return colors.join(":");
}
console.log(f('red', 'yellow', 'blue'));*/

// ramda 로 만든 식(결과는 같다.)
s = ((...colors) => colors.join(":"))('red', 'yellow', 'blue');
console.log(s);
