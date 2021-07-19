const assert = require('assert').strict;
const { X } = require('./ex02');
try{
    const a = new X();
    const b = new X();
    const c = a;
    assert.equal(a, c, 'fail: a === c'); 
    //assert.equal(a, b, 'fail: a === b'); 
    assert.deepEqual(a, c, 'fail: deepEqual1'); 
    assert.deepEqual(a, b, 'fail: deepEqual2'); 

    b.bar = 'foo'
    assert.notDeepEqual(a, b, 'fail: notDeepEqual1');  // 같지않음을 알고 실행하는것.

    console.log("OK!");
}catch(error){
    console.log("error cause: " + error.message);
}
