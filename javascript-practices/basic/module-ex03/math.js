/* 
    각각의 모듈을 exports를 하는 방법
    !- 꼭 export.이름 <- 을 명시해줘야 한다. -!
       named export
*/
exports.PI =  3.14;

exports.min = function(){
        let min = Number.Min_SAFE_INTEGER;

        Array.from(arguments).forEach(e => {
            min = e < min ? min:e
        });
        return min;
    };

    exports.max = function(){
        let max = Number.MAX_SAFE_INTEGER;

    Array.from(arguments).forEach(e => {
        max = e > max ? max:e
    });
    return max;
    }