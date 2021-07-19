const assert = require('assert').strict;
const { add } = require('./ex02');
try{
    assert.equal(add(10,20), '30') 
    console.log("OK!");
}catch(error){
    console.log("error cause: " + error.message);
}
