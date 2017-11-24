function flipOrderOfArray(array) {
    array.reverse();
    return array;
}

function getPartOfAnArray(array, start, end) {
    return array.slice(start, end);
}

function addElementToSpecificIndexInArray(element, index, array) {
    array.splice(index, 0, element);
    return array;
}

function removeElementFromSepcificIndexOfArray(index, array) {
    return array.splice(index, 1);
}

function removeElementFromSepcificIndexOfArrayAndAddNewElement(
    index,
    array,
    element
) {
    array.splice(index, 1, element);
    return array;
}

export {
    flipOrderOfArray,
    getPartOfAnArray,
    addElementToSpecificIndexInArray,
    removeElementFromSepcificIndexOfArray,
    removeElementFromSepcificIndexOfArrayAndAddNewElement
};
