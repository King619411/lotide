const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: 1 === 1')
  } else {
    console.log('🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp')
  }
};

const findKeyByValue  = (objectName,targetValue) => {
  for (const keyValue in objectName) {
    if (objectName[keyValue] === targetValue) {
    }
  }
};


const findKeyByValue = function (object, targetValue) {
  let keys = Object.keys(object);

  for (let key of keys) {
    if (object[key] === targetValue) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);