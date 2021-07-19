const assert = require('assert');
const { add } = require('./ex02');
try{             //actual     //expect   
    assert.equal(add(10, 20), 30); //"=="
    assert.strictEqual(add(10,20), 30) //"==="
    console.log("OK!");
}catch(error){
    console.error("error cause: " + error.message);
}
