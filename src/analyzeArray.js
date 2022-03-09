function average(array) {
    let length = array.length;
    let sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return sum/length;
}

function analyzeArray(array) {
    const object = {
        average: average(array),
        min:Math.min(...array),
        max:Math.max(...array),
        length: array.length
    }
    return object;
}

module.exports=analyzeArray;