const { sumAsync, substractAsync } = require('./math')

test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('substractAsync subtracts numbers asynchronously', async () => {
  const result = await substractAsync(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})
