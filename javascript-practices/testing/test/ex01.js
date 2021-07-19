const assert = require('assert');
const {hello} = require('../ex01');
        //-> ex01.js 의 hello 객체를 가르킨다. 
//console.log(hello());

describe('hello()', function(){
    it(`"Hello World" 문자열을 반환해야한다.`, function(){
        assert.strictEqual(hello(), "Hello world");

    });
});