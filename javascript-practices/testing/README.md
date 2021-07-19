# TEST

## JAVASCRIPT 단위 테스트 도구
1. 자바스크립트 단위 테스트 도구는 20여가지가 넘게 있다.
2. Java: JUnit == Javascript: JSUnit(개발중지, 2009년)
3. JSUnit 프로젝트를 이어받는 것이 Jasmine (2010년 ~ 현재)
    - 자체 Assertion을 가지고 있다.
    - BDD 기반의 개발 표준 테스팅에 맞는 문법을 작성할 수 있다.
4. DOM 직접 조작 어플리케이션(jQuery 기반)
    <pre>
    -> QUnit
         - 세팅하기가 쉽고 간편하게 테스트
         - Promise 기반 비동기 테스트
    </pre>     
5. Node 기반 backend application test
     <pre>
    -> Mocha
        - Promise 기반 비동기 테스트
        - 자체 Assertion이 없다.
        - 대신, Node core module 중에 assert 모듈 뿐만 아니라, 다양한 외부 assertion 라이브러리를 다양하게 지원한다. ex) chai, should.js, expect.js
        - 유연하고 확장성이 좋다.    
     </pre>    
6. Jasmine, QUnit, Mocha, Jest (React 개발 테스트 도구)

## Mocha 설치
``` bash
$ npm i -D mocha
$ npx mocha --version (version은 현재 9.0.2)
```

## Mocha testcase module 작성
[ex01.js]
```javascript
    exports.hello = () => 'Hello world';
```

- test 파일 -
[test/ex01.js]
```javascript
    const assert = require('assert');
    const {hello} = require('../ex01');
        //-> ex01.js 의 hello 객체를 가르킨다. 

    describe('hello()', function(){
        it(`"Hello World" 문자열을 반환해야한다.`, function(){
            assert.strictEqual(hello(), "Hello world");
        });
    });
```

- test 수행1 [개별적 수행]
``` bash
$ npx mocha test/ex01
```

- test 수행2 [일괄적 수행]
``` bash
$ npx mocha [mocha 밑의 하부디렉토리까지 전부 확인하여 테스트함]
```

- test 수행3 [npm scripts 추가]
1. package.json에 scripts test stage 추가
```
    json
    .
    .
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" ==> "npx mocha 로 변경해서 npm test 를 통해서 실행
    }
    .
    .
```

## Assertion 기초
[ex02.js]
``` javascript
exports.add = (a,b) => a+b;
exports.na = () => [2, 4, 6];
exports.X = function(){
}
```

[ex02.test01.js]
```  
const assert = require('assert');
const { add } = require('./ex02');
try{             //actual     //expect   
    assert.equal(add(10, 20), 30); //"=="
    assert.strictEqual(add(10,20), 30) //"==="
    console.log("OK!");
}catch(error){
    console.error("error cause: " + error.message);
}

```
String mode(===, !===, 객체인 경우 동일성)로 assertion을 해야한다.
    1. equals(deprecteds) -> strictEqual
    2. notEqual(deprecteds) -> strictNotEqual
    3. deepEqual(deprecteds) -> strictDeepEqual
    4. notDeepEqual(deprecteds) -> strictNotDeepEqual
```
```