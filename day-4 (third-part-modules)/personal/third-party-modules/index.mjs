import { generate } from "random-words";
console.log(generate())     // print 1 random word
console.log(generate(10))   // print 10 random word
console.log(generate({ minLength: 5, maxLength: 5, exactly: 5 }))   //print 5 random word + length = 5