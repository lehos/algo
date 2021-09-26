const brackets = {
  '(': ')',
  '[': ']',
  '{': '}',
}
const closingBrackets = Object.values(brackets)

type OpeningBracket = keyof typeof brackets

export function checkMatchingBrackets(input: string): number {
  const stack: { char: OpeningBracket; index: number }[] = []

  for (let i = 1; i <= input.length; i++) {
    const char = input[i - 1]

    if (char in brackets) {
      stack.push({ char: char as OpeningBracket, index: i })
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0) {
        return i
      }

      const last = stack.pop()
      if (brackets[last!.char] !== char) {
        return i
      }
    }
  }

  return stack.length === 0 ? 0 : stack[0].index
}
