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