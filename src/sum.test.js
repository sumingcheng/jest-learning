const sum = require('./sum')
const playGame = require('./promise')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})


test("test the result of playing game", async () => {
  await expect(playGame()).resolves.toBe("You have won!");
});