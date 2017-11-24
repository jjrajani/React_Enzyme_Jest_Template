import {
    flipOrderOfArray,
    getPartOfAnArray,
    addElementToSpecificIndexInArray,
    removeElementFromSepcificIndexOfArray,
    removeElementFromSepcificIndexOfArrayAndAddNewElement
} from './array_basic_manipulations.js';
// } from './array_basic_manipulations.solution.js';

describe('Array basic manipulation methods - complete the function in the file array_basic_manipulations/array_basic_manipulations_methods.js', () => {
    describe('flipping the order of an array - complete the flipOrderOfArray function', () => {
        let array = ['Beer', 'Javascript', 'Flourescent', 'Blueberries'];
        let flippedArray = ['Blueberries', 'Flourescent', 'Javascript', 'Beer'];

        test(`it should return ${array} in the opposite order`, () => {
            expect(flipOrderOfArray(array)).toEqual(flippedArray);
        });
    });

    describe('getting part of an array - complete the getPartOfAnArray function', () => {
        let array = ['Beer', 'Javascript', 'Flourescent', 'Blueberries'];
        let arrayPart = ['Javascript', 'Flourescent'];

        test('it should return the part of the array between the provided indexes', () => {
            expect(getPartOfAnArray(array, 1, 3)).toEqual(arrayPart);
        });
    });

    describe('adding an element to a specific index in an array - complete the addElementToSpecificIndexInArray function', () => {
        let array = ['Beer', 'Javascript', 'Flourescent', 'Blueberries'];
        let arrayWithAddedElement = [
            'Beer',
            'Javascript',
            'Jackson',
            'Flourescent',
            'Blueberries'
        ];

        test('it should return the array with the new element in the provided index', () => {
            expect(
                addElementToSpecificIndexInArray('Jackson', 2, array)
            ).toEqual(arrayWithAddedElement);
        });
    });

    describe('removing a specific element from an array', () => {
        let array = ['Beer', 'Javascript', 'Flourescent', 'Blueberries'];
        let removedElementArray = ['Flourescent'];
        test(`it should return an array with the removed element that was in the provided index of ${
            array
        }`, () => {
            expect(removeElementFromSepcificIndexOfArray(2, array)).toEqual(
                removedElementArray
            );
        });
    });

    describe('removing a specific element from an array then adding an element in its place', () => {
        let array = ['Beer', 'Javascript', 'Flourescent', 'Blueberries'];
        let removedThenAddedElementArray = [
            'Beer',
            'Javascript',
            'Jackson',
            'Blueberries'
        ];
        test(`it should return ${
            array
        } with the added element replacing the removed element`, () => {
            expect(
                removeElementFromSepcificIndexOfArrayAndAddNewElement(
                    2,
                    array,
                    'Jackson'
                )
            ).toEqual(removedThenAddedElementArray);
        });
    });
});
