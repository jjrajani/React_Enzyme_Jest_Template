function orderArrayAscending(array) {
    return array.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
}
function orderArrayDescending(array) {
    return array.sort((a, b) => {
        if (a > b) {
            return -1;
        } else if (a < b) {
            return 1;
        } else {
            return 0;
        }
    });
}

function modifyEachElementInArray(array) {
    return array.map(element => {
        return element + 4;
    });
}
function removeQualifiedElementsFromArray(array) {
    return array.filter(element => {
        return element % 2 !== 0;
    });
}

export {
    orderArrayAscending,
    orderArrayDescending,
    modifyEachElementInArray,
    removeQualifiedElementsFromArray
};
