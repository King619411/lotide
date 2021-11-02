# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @wdouri01/lotide`

**Require it:**

`const _ = require('@wdouri01/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: A function that asserts if two arrays are equals
- `assertEqual`: A function that asserts if two values are equals
- `assertObjectsEqual`: A function that asserts if two objects are equals
- `countLetters`: A function that returns counts of each letter of a string
- `countOnly`: A function that takes items and returns counts for a specific subset of those items
- `eqArrays`: A function that compares two arrays
- `eqObjects`: A function that compares two objects
- `findKey`: A function that scans the object and return the first key for which the callback returns a truthy value
- `findKeyByValue`: A function that searches for a key on an object where its value matches a given value
- `head`: A function that retrieves the first element from the array
- `index`: A function that list of all the functions in an object
- `letterPositions`: A function that returns all the indices in the string where each character is found
- `map`: A function that creates a new array with the results of calling a provided function on every element in the calling array
- `middle`: A function that returns the middle element of an array
- `tail`: A function that retrieves every element except the head (first element) of the array
- `takeUntil`: A function that returns a slice of the array with elements taken from the beginning
- `without`: A function that removes elements from an array
