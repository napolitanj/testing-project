const capitalize = require('./capitalize');

test('is Capitalized', () => {
    expect(capitalize("octopus")).toBe("Octopus");
})
