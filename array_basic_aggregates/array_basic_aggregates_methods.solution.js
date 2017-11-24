function addTwoArraysTogether(firstArray, secondArray) {
    return firstArray.concat(secondArray);
}

function combindElementsInAnArrayGeneric(array) {
    return array.join();
}

function combindElementsInAnArrayWithSpace(array) {
    return array.join(' ');
}

export {
    addTwoArraysTogether,
    combindElementsInAnArrayGeneric,
    combindElementsInAnArrayWithSpace
};
