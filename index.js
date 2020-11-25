const names = ['Lisa', 'Kaitlin', 'Jan'];
const event = "birthday";
let thankYous = []

function writeCards(names, event) {
  for (let i= 0; i < names.length; i++) {
  thankYous.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thankYous;
}

function countDown(number) {
  while (number >= 0 ) {
    console.log(number--);
  }
}
