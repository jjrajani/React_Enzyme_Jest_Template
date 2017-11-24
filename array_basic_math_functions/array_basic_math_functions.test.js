import {
    findLargestNumberInArray,
    findSmallestNumberInArray,
    findAverageNumberInArray
} from './array_basic_math_functions.js';
// } from './array_basic_math_functions.solution.js';

describe('Array basic math functions - complete the function in the file array_basic_math_functions/array_basic_math_functions_methods.js', () => {
    describe('finding the largest number in an array - complete the findLargestNumberInArray function', () => {
        let array = [12, 45, 28, 21];
        let arrayTwo = [109, 34, 12, 17];

        test(`it should return the largest number in ${array}`, () => {
            expect(findLargestNumberInArray(array)).toBe(45);
            expect(findLargestNumberInArray(arrayTwo)).toBe(109);
        });
    });

    describe('finding the smallest number in an array - complete the findSmallestNumberInArray function', () => {
        let array = [12, 45, 28, 21];
        let arrayTwo = [72, 35, 8, 21];

        test(`it should return the largest number in ${array}`, () => {
            expect(findSmallestNumberInArray(array)).toBe(12);
            expect(findSmallestNumberInArray(arrayTwo)).toBe(8);
        });
    });

    describe('finding the average number of an array - complete the findAverageNumberInArray function', () => {
        let array = [12, 45, 28, 21];
        let arrayTwo = [8, 33, 28, 21];

        test(`it should return the largest number in ${array}`, () => {
            expect(findAverageNumberInArray(array)).toBe(26.5);
            expect(findAverageNumberInArray(arrayTwo)).toBe(22.5);
        });
    });
});
