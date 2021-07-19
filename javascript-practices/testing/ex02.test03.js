const assert = require('assert').strict;
const { na } = require('./ex02');
try{
    assert.deepEqual(na(), [2,4,6], 'fail: deepEqual'); // 내용비교
    assert.equal(na(), [2,4,6], 'fail: equal'); //동일성 비교
    console.log("OK!");
}catch(error){
    console.log("error cause: " + error.message);
}
