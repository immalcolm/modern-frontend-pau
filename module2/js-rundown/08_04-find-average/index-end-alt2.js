//@author Kai
let total = 0
let guesses = []

let firstGuess = parseInt(prompt(''))
guesses.push(firstGuess)

while (guesses[guesses.length - 1] !== 0) {
  let s = parseInt(prompt(''))
  if (s === 0) break
  guesses.push(s)
}

for (let i = 0; i < guesses.length; i++) {
  total += guesses[i]
  console.log(guesses[i])
}

console.log((total / guesses.length).toFixed(2))