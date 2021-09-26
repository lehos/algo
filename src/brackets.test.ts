import { checkMatchingBrackets } from './brackets'

describe('Check matching brackets', () => {
  const arr = [
    ['[]', 0],
    ['{}[]', 0],
    ['[()]', 0],
    ['(())', 0],
    ['{[]}()', 0],
    ['([](){([])})', 0],
    ['foo(bar);', 0],
    ['{*}', 0],
    ['', 0],
    ['*{}', 0],

    ['{[}', 3],
    ['()[]}', 5],
    ['{{[()]]', 7],
    ['foo(bar[i);', 10],
    ['()[]}', 5],
    ['{{[()]]', 7],
    ['}', 1],

    ['{', 1],
    ['{}([]', 3],
    ['{{[()]}', 1],
    ['{{{[][][]', 1],
    ['{*{{}', 1],
    ['[[*', 1],
    ['{{', 1],
    ['{{{**[][][]', 1],
    ['({[', 1],
    ['({{}', 1],
  ]

  test.each(arr)('Case %s expects %s', (input, output) => {
    expect(checkMatchingBrackets(input as string)).toBe(output)
  })
})
