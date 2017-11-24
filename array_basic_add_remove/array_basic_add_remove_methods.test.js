import {
    removeLastElementFromArray,
    addElementToBackOfArray,
    removeFirstElementInArray,
    addElementToFrontOfArray
} from './array_basic_add_remove_methods.js';
// } from './array_basic_add_remove_methods.solution.js';

describe('Array basic add & remove methods - complete the function in the file array_basic_add_remove/array_basic_add_remove_methods.js', () => {
    describe('removing the last element in an array - complete the poppedElement function', () => {
        let topPopArray = ['Beer', 'Javascript', 'Flourescent', 'Blueberries'];

        test(`it should return the last element in ${topPopArray}`, () => {
            expect(removeLastElementFromArray(topPopArray)).toBe('Blueberries');
        });
    });

    describe('adding an element to the end of an array - complete the addElementToFrontOfArray function', () => {
        let array = ['Beer', 'Javascript', 'Flourescent', 'Blueberries'];
        let arrayInitialLength = array.length;

        test(`it should add "Jackson" to the end of ${
            array
        } and return the new length`, () => {
            expect(addElementToBackOfArray('Jackson', array)).toBe(
                arrayInitialLength + 1
            );
        });
        test('"Jackson" should now be the first element in the array', () => {
            expect(array.indexOf('Jackson')).toBe(4);
        });
    });

    describe('removing the first element from an array', () => {
        let array = ['Beer', 'Javascript', 'Flourescent', 'Blueberries'];
        let removedElement = removeFirstElementInArray(array);

        test(`it should return the first element in ${array}`, () => {
            expect(removedElement).toBe('Beer');
        });
        test('the initial array should now be missing the removed element', () => {
            expect(array.indexOf(removedElement)).toBe(-1);
        });
    });

    describe('adding an element to the front of an array', () => {
        let array = ['Beer', 'Javascript', 'Flourescent', 'Blueberries'];
        let arrayInitialLength = 4;

        test(`it should add "Jackson" to the front of ${
            array
        } and return the new length`, () => {
            expect(addElementToFrontOfArray('Jackson', array)).toBe(
                arrayInitialLength + 1
            );
        });
        test('"Jackson" should now be the first element in the array', () => {
            expect(array.indexOf('Jackson')).toBe(0);
        });
    });
});
