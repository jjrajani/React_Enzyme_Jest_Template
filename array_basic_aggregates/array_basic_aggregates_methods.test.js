import {
    addTwoArraysTogether,
    combindElementsInAnArrayGeneric,
    combindElementsInAnArrayWithSpace
} from './array_basic_aggregates_methods.js';
// } from './array_basic_aggregates_methods.solution.js';

describe('Array basic aggregate methods - complete the function in the file array_basic_aggregates_methods/array_basic_aggregates_methods.js', () => {
    describe('merging arrays - complete the addTwoArraysTogether function', () => {
        let firstArray = ['Jenna', 'Purple'];
        let secondArray = ['Bailey', 'Felix'];
        let mergedArray = ['Jenna', 'Purple', 'Bailey', 'Felix'];

        test(`it should return a new array with all the elements from ${
            firstArray
        } and ${secondArray}`, () => {
            expect(addTwoArraysTogether(firstArray, secondArray)).toEqual(
                mergedArray
            );
        });
    });

    describe('merging elements in an array - complete the combindElementsInAnArrayGeneric function', () => {
        let array = ['Beer', 'Javascript', 'Flourescent'];
        let mergedGeneric = 'Beer,Javascript,Flourescent';

        test(`it should merge the elements in ${
            array
        } and return a string with all the elements`, () => {
            expect(combindElementsInAnArrayGeneric(array)).toBe(mergedGeneric);
        });
    });

    describe('customized merging elements in an array - complete the combindElementsInAnArrayWithSpace function', () => {
        let array = ['Beer', 'Javascript', 'Flourescent'];
        let customizedMergedArray = 'Beer Javascript Flourescent';

        test(`it should merge the elements in ${
            array
        } and return a string with all the elements with spaces inbetween each word`, () => {
            expect(combindElementsInAnArrayWithSpace(array)).toBe(
                customizedMergedArray
            );
        });
    });
});
