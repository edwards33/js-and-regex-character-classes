var text01 = `?at 0at mat cat bat Hat`

var regex01 = /[cb]at/g
var regex02 = /[bc]at/g

var regex03 = /[^bc]at/g // not b and c
var regex04 = /[a-z]at/g // range
var regex05 = /[a-zA-Z]at/g // range
var regex06 = /[^a-zA-Z]at/g // not range
var regex07 = /[0-9]at/g // num range
var regex08 = /[?]at/g

const loop = (targetText, reg) => {
  while((result = reg.exec(targetText)) !== null) {
    console.log(result)
  }
}
console.log('\nregex01:')
loop(text01, regex01)
console.log('\nregex02:')
loop(text01, regex02)
console.log('\nregex03:')
loop(text01, regex03)
console.log('\nregex04:')
loop(text01, regex04)
console.log('\nregex05:')
loop(text01, regex05)
console.log('\nregex06:')
loop(text01, regex06)
console.log('\nregex07:')
loop(text01, regex07)
console.log('\nregex08:')
loop(text01, regex08)

