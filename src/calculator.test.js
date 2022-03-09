const calculator = require("./calculator")

test('1+3 = 4', () => {
    expect(calculator.add(1,3)).toBe(4);
})

test('3-1 = 2', () => {
    expect(calculator.subtract(3,1)).toBe(2);
})

test('1x3 = 3', () => {
    expect(calculator.multiply(1,3)).toBe(3);
})

test('4/2 = 2', () => {
    expect(calculator.divide(4,2)).toBe(2);
})
