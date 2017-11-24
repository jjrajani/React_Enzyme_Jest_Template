import {
    findIndexOf,
    findLastIndexOf,
    guessTheIndex,
    guessTheLastIndex
    // } from './array_index_methods.solution.js';
} from './array_index_methods.js';

describe('Array index methods - complete the function in the file array_indexes/array_index_methods.js', () => {
    describe('getting the index of - complete the findeIndexOf function', () => {
        let indexOfArray = ['Beer', 'Javascript', 'Flourescent', 'Blueberries'];

        test('it should return the index of "Flourescent" in array', () => {
            expect(findIndexOf('Flourescent', indexOfArray)).toBe(2);
        });
    });

    describe('getting the last index of - complete the findLastIndexOf function', () => {
        let lastIndexOfArray = ['Jackson', 'Freddie', 'Eric', 'Jackson'];

        test('it should return the last index of "Jackson"', () => {
            expect(findLastIndexOf('Jackson', lastIndexOfArray)).toBe(3);
        });
    });

    describe('tell me the index of - give guessTheIndex a value', () => {
        let guessTheIndexArray = ['France', 'Coffee', 'Bailey'];

        test(`it should equal the index of "Bailey" in ${
            guessTheIndexArray
        }`, () => {
            expect(guessTheIndex).toEqual(guessTheIndexArray.indexOf('Bailey'));
        });
    });

    describe('tell me the last index of - give guessTheLastIndex a value', () => {
        let guessTheLastIndexArray = ['Vodka', 'Tequila', 'Whiskey', 'Vodka'];

        test(`it should equal the last index of Vodka in ${
            guessTheLastIndexArray
        }`, () => {
            expect(guessTheLastIndex).toEqual(
                guessTheLastIndexArray.lastIndexOf('Vodka')
            );
        });
    });
});
