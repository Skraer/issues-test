import { foo } from './test-test'
const myMock = jest.fn()

test('returns 5', () => {
  myMock.mockReturnValue(5)
  expect(myMock(1)).toBe(5)
})
