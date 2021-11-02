const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {

  it("For arrays with one or two elements, there is no middle. Return an empty array.", () => {
    const inputArr = [1];
    const expectedOutput = [];
    assert.deepEqual(middle(inputArr), expectedOutput);
  });

  it("For arrays with one or two elements, there is no middle. Return an empty array.", () => {
    const inputArr = [1,2];
    const expectedOutput = [];
    assert.deepEqual(middle(inputArr), expectedOutput);
  });

  it("For arrays with odd number of elements, an array containing a single middle element should be returned.", () => {
    const inputArr = [1,2,3];
    const expectedOutput = [2];
    assert.deepEqual(middle(inputArr), expectedOutput);   

    const inputArr2 = [1,2,3,4,5];
    const expectedOutput2 = [3];
    assert.deepEqual(middle(inputArr2), expectedOutput2);  
  });

  it("For arrays with an even number of elements, an array containing the two elements in the middle should be returned.", () => {
    const inputArr = [1,2,3,4];
    const expectedOutput = [2,3];
    assert.deepEqual(middle(inputArr), expectedOutput);  

    const inputArr2 = [1,2,3,4,5,6];
    const expectedOutput2 = [3,4];
    assert.deepEqual(middle(inputArr2), expectedOutput2); 
  
  });

});











//middle([1, 2, 3, 4, 5]);
//assertArraysEqual(middle([1, 2, 3, 4, 5]), [5]);