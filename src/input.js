const { createInterface } = require('readline')
const rl = createInterface({ input: process.stdin, output: process.stdout })

rl.on('line', (line) => {
  console.log(line)
})
