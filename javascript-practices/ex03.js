/* 
    # 구문(Statement)
    
    1. 자바스크립트의 실행 단위
    
    2. 구성 요소
        값, 연산자 : 표현식
        주석       : 구문을 구성해도 실행되지 않음
        예약어     : if, else, for, ....
    
    3. 구문의 예
        if, if~else, if~elseif~else
        while, do-while, for
        switch
        for~in
        with(deprecated)
        변수 정의(함수 정의)
    
    4. 공백: 토큰 구분, 무시

    5. 세미콜론:
        원칙적으로 구문을 분리하는 역할수행.

    6. 개행(line breaker)
*/

// -> var s = "hello world"; 를 표현식 구문(expression statement)를 만드는 표현식을 실행하는 역할을 한다.
var s = "hello world"; console.log(s);

// 개행은 ';' 로 대체된다.
var s = "hello world"
console.log(s);

// 하지만 상황에 따라서는 토큰을 분리하는 역할도 하고 ';' 역할도 한다.
a
=
2
+
2
;
console.log(a); // -> 엔진이 유도리있게 연산실행을 해서 결과를 보여준다.
