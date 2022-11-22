// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

//isPhoneNumber
//true
test('checks phone # (408)-707-6060, expects true', () => {
    expect(functions['isPhoneNumber']("(408)-707-6060")).toBe(true);
});
test('checks phone # 505-423-1237 expects true', () => {
    expect(functions['isPhoneNumber']("505-423-1237")).toBe(true);
});
//false
test('checks phone # 4567-789-101 expects false', () => {
    expect(functions['isPhoneNumber']("4567-789-101")).toBe(false);
});
test('checks phone # 1abjkfabs expects false', () => {
    expect(functions['isPhoneNumber']("1abjkfabs")).toBe(false);
});

//isEmail
//true
test('checks email apandey@ucsd.edu, expects true', () => {
    expect(functions['isEmail']("apandey@ucsd.edu")).toBe(true);
});
test('checks email ak1234@gmail.com, expects true', () => {
    expect(functions['isEmail']("ak1234@gmail.com")).toBe(true);
});

//false
test('checks email ak****4@gmail.com, expects false', () => {
    expect(functions['isEmail']("ak****4@gmail.com")).toBe(false);
});
test('checks email gmail.com, expects false', () => {
    expect(functions['isEmail']("gmail.com")).toBe(false);
});

//isStrongPassword
//true
test('checks password H4817_A3525, expects true', () => {
    expect(functions['isStrongPassword']("H4817_A3525")).toBe(true);
});
test('checks password m4ng0, expects true', () => {
    expect(functions['isStrongPassword']("m4ng0")).toBe(true);
});

//false 
test('checks password ddd, expects false', () => {
    expect(functions['isStrongPassword']("ddd")).toBe(false);
});
test('checks password !!!!, expects false', () => {
    expect(functions['isStrongPassword']("!!!!")).toBe(false);
});

//isDate
//true
test('checks date 12/13/2002, expects true', () => {
    expect(functions['isDate']("12/13/2002")).toBe(true);
});
test('checks date 1/1/2002, expects true', () => {
    expect(functions['isDate']("1/1/2002")).toBe(true);
});

//true
test('checks date 2002/2002/2002, expects false', () => {
    expect(functions['isDate']("2002/2002/2002")).toBe(false);
});
test('checks date 1/1/02, expects false', () => {
    expect(functions['isDate']("1/1/02")).toBe(false);
});

// isHexColor()
//true
test('checks color #fcba03, expects true', () => {
    expect(functions['isHexColor']("#fcba03")).toBe(true);
});
test('checks color #a03, expects true', () => {
    expect(functions['isHexColor']("#a03")).toBe(true);
});

//false 
test('checks color #fcba03, expects false', () => {
    expect(functions['isHexColor']("fcba0389")).toBe(false);
});
test('checks color #a036, expects false', () => {
    expect(functions['isHexColor']("#a036")).toBe(false);
});


