const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  // # 
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  // ^Test cases Copy pasta ^
  // Test cases from Head notes below
  it("should return undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });

  it("should return 1 for [1]", () => {
    assert.strictEqual(head([1]), 1);
  });

  it("should return undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

});

/*
You should always be thinking about other scenarios to consider. Here are some such examples and how they should be handled: 

(Test case) An array with only one element should still yield that one element as its head 
(Test case) empty array should yield undefined as its head


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

*/