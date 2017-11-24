function removeLastElementFromArray(array) {
    return array.pop();
}

function addElementToBackOfArray(element, array) {
    return array.push(element);
}

function removeFirstElementInArray(array) {
    return array.shift();
}

function addElementToFrontOfArray(element, array) {
    return array.unshift(element);
}

export {
    removeLastElementFromArray,
    addElementToBackOfArray,
    removeFirstElementInArray,
    addElementToFrontOfArray
};
