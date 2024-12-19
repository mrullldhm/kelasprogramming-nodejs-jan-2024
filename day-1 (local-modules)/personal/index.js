// Example 1
const firstName = "Amirul";
const lastName = "Adham";
const greeting = `Hello, my name is ${firstName} ${lastName}`;
console.log(greeting);

// Example 2
const animals = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐙",
  "🐵",
  "🦄",
];

for (let i = 0; i < animals.length; i++) {
  const sentence = `The animal at index ${i} is ${animals[i]}`;
  console.log(sentence);
}

//Example 3
//Best practice to put require at the top of the file

const m = require("./math") //declare and received the exported object
const a = m.add(15, 3)
const b = m.subtract(50, 3)
const c = m.multiply(0, 3)
console.log("EXPORTED")
console.log(a,b,c)

const t = require("./time") //declare and received the exported object
console.log("EXPORTED")
console.log(t.time, "time")
console.log(t.hours, "hours")
console.log(t.minutes, "minutes")
console.log(t.seconds, "seconds")
console.log(t.day, "day")
console.log(t.month, "month")