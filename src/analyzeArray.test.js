const analyzeArray = require("./analyzeArray")

test("Does analyzeArray([1,8,3,4,2,6]) return an object with average, min, max, length", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average:4,min:1,max:8,length:6});
});