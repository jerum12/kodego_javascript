const sum = (a, b) => a + b;

test('add 1 + 2 to eqauls 3', () => {
  expect(sum(1, 2)).toBe(3);
});
