import stringCount from ".";
 
test('get string length', () => {
    expect(stringCount('ibrahim')).toBe(7);
});

test('return 0 for empty string', () => {
    expect(stringCount('')).toBe(0);
})

test('return 0 for string larger than 10', () =>  {
    expect(stringCount('kdfdjdkjdjfkdjdj')).toBe(0);
})

