const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("#tail", () => {

  it("return ['Lighthouse', 'Labs'] if the full tail is returned", () => {
    const inputArr = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(inputArr), expectedOutput); 
  });

  it("return an An empty array should yield an empty array for its tail", () => {
    const inputArr = [];
    const expectedOutput = [];
    assert.deepEqual(tail(inputArr), expectedOutput);
  });

  it("return An array with only one element should yield an empty array for its tail", () => {
    const inputArr = [""];
    const expectedOutput = [];
    assert.deepEqual(tail(inputArr), expectedOutput);
  });

  it("return the oringinal array", () => {
  const inputArr = ["Yo Yo", "Lighthouse", "Labs"];
  tail(inputArr); 
  assert.strictEqual(inputArr.length, 3); 
  });

});


/*
// Test Case: Check the original array 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

*/