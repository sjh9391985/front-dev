/* 한번에 여러가지의 
   모듈을 내보내고 싶을때 
   사용하는 방법 
*/
module.exports = {
    PI: 3.14,
    min : function(){
        let min = Number.Min_SAFE_INTEGER;

        Array.from(arguments).forEach(e => {
            min = e < min ? min:e
        });
        return min;
    },
    max: function(){
        let max = Number.MAX_SAFE_INTEGER;

    Array.from(arguments).forEach(e => {
        max = e > max ? max:e
    });
    return max;
    }
}