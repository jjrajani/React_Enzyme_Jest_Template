function findLargestNumberInArray(array) {
    return Math.max.apply(null, array);
}

function findSmallestNumberInArray(array) {
    return Math.min.apply(null, array);
}

function findAverageNumberInArray(array) {
    let sum = 0;
    let totalElements = array.length;
    array.forEach(number => {
        sum += number;
    });
    return sum / totalElements;

    // Second solution
    // let total = array.reduce((a, b) => {
    //   return a + b;
    // }, 0);
    // return total / array.length;

    // third solutions
    // let totalElements = arrayl.length;
    // return array.reduce((a, b) => {
    //   return a + b
    // }, 0) / totalElements;
}

export {
    findLargestNumberInArray,
    findSmallestNumberInArray,
    findAverageNumberInArray
};
