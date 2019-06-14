const magic = require('./magic');

test('magic magicizes correctly', () => {
  expect(magic(3, 3)).toBe(333); // is this test correct?
});
