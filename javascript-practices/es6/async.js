const request01 = function(url, callback) { // DB, query, $.ajax와 같음
    console.log(url);
    setTimeout(function(){
        const response = {
            data  : "Hello World"
        }
        callback(response);
    }, 2000);
} 

request01("http://www.son.com/api", function (response) {
   console.log(response); 
});