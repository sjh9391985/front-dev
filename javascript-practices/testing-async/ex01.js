const ex01 = function(param, callback){
    // 비동기 코드
    // ex) 파일 시스템 접근, 네트워크 통신, SQL to DB, setTimeout
    setTimeout(() => {
        if(param == 'param-data'){
            callback(null, 'ok') // callback는 앞에는 에러를 줌, 뒤엔 데이터를 준다.
        } else{
            callback(new Error('fail'))
        }
    }, 1000);
}


if(require.main == module){

    // test01: success
    ex01('param-data')
    .then(function(res){
        console.log(res);
    })
    
    // test02: fail
    ex01('param-error')
    .catch(function(err){
        console.error(err.message);
    })
    
    console.log("waits..");
    } else{
        module.exports = ex01
    }
    