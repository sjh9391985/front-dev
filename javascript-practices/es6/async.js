const request01 = function(url, callback) { // DB, query, $.ajax와 유사
    console.log(url);
    setTimeout(function(){
        const response = {
            data  : "Hello World"
        }
        callback(response);
    }, 2000);
} 

const request02 = function (url) {  // db.query, $.ajax 함수를 Promise 객체를 리턴하는 프라미즈화(promify)
    console.log(url);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const response = {
                data  : "Hello World"
            }
            resolve(response);
            
            // error
            // reject('fails: request02')
        }, 2000);
    })    
}

const fetch = async function(url) { // ex) model.findAll, model.insert, ...
    try{
        const response =  await request02(url);
        return response;
    } catch( err ){
        console.error(err);
    }
 }

/*
request01("http://www.son.com/api", function (response) {
   console.log(response); 
});
 
request02("http://www.son.com/api")
.then(function (response) {
    console.log(response);
})
.catch(function(err){
    console.error(err);
})
*/

const index = async function () {
    const response = await fetch("http://www.son.com/api")
    console.log(response);
}
index();

console.log('do something');