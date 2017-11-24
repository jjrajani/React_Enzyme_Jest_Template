// sort // map // filter

import {
    orderArrayAscending,
    orderArrayDescending,
    modifyEachElementInArray,
    removeQualifiedElementsFromArray
} from './array_advanced_manipulations.js';
// } from './array_advanced_manipulations.solution.js';

describe('Array advanced manipulation methods - complete the function in the file array_advanced_manipulations/array_advanced_manipulations_methods.js', () => {
    describe('ordering an array in ascending order - complete the orderArrayAscending function', () => {
        let stringArray = ['Beer', 'Javascript', 'Flourescent', 'Blueberries'];
        let numberArray = [3, 45, 8, 12];
        let orderedStringArray = [
            'Beer',
            'Blueberries',
            'Flourescent',
            'Javascript'
        ];
        let orderedNumberArray = [3, 8, 12, 45];

        test(`it should return ${stringArray} in the ascending order`, () => {
            expect(orderArrayAscending(stringArray)).toEqual(
                orderedStringArray
            );
        });
        test(`it should return ${numberArray} in the ascending order`, () => {
            expect(orderArrayAscending(numberArray)).toEqual(
                orderedNumberArray
            );
        });
    });

    describe('ordering an array in decending order - complete the orderArrayDescending function', () => {
        let stringArray = ['Beer', 'Javascript', 'Flourescent', 'Blueberries'];
        let numberArray = [3, 45, 8, 12];
        let orderedStringArray = [
            'Javascript',
            'Flourescent',
            'Blueberries',
            'Beer'
        ];
        let orderedNumberArray = [45, 12, 8, 3];

        test(`it should return ${stringArray} in the descending order`, () => {
            expect(orderArrayDescending(stringArray)).toEqual(
                orderedStringArray
            );
        });
        test(`it should return ${numberArray} in the descending order`, () => {
            expect(orderArrayDescending(numberArray)).toEqual(
                orderedNumberArray
            );
        });
    });

    describe('modifying each element in an array - complete the getPartOfAnArray function', () => {
        let array = [1, 4, 7, 12];
        let modifiedArray = [5, 8, 11, 16];

        test(`it should add 4 to each number in ${array}`, () => {
            expect(modifyEachElementInArray(array)).toEqual(modifiedArray);
        });
    });

    describe('removing qualified elements in an array - complete the removeQualifiedElementsFromArray function', () => {
        let array = [1, 4, 7, 12];
        let modifiedArray = [1, 7];

        test(`it should remove the even numbers in ${array}`, () => {
            expect(removeQualifiedElementsFromArray(array)).toEqual(
                modifiedArray
            );
        });
    });
});
