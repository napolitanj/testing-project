const cipherString = require("./caesarCipher")

test('abc to be bcd', () => {
    expect(cipherString("abc")).toBe("bcd");
});

test('aaabbbzzz to be bbbcccaaa', () => {
    expect(cipherString("aaabbbzzz")).toBe("bbbcccaaa");
});

test('aBc to be bCd', () => {
    expect(cipherString("aBc")).toBe("bCd");
});

test('aAaBbbzzZ to be bBbCccaaA', () => {
    expect(cipherString("aAaBbbzzZ")).toBe("bBbCccaaA");
});

test('a!,.bc to be bcd', () => {
    expect(cipherString("a!,.bc")).toBe("bcd");
});