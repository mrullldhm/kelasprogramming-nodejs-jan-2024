//LOCAL MODULES
//Mathematical operations
function add (a,b) {
    return a + b
}

function subtract (a,b) {
    return a - b
}

function multiply (a,b) {
    return a * b
}

const a = add (5,3)
const b = subtract (5,3)
const c = multiply (5,3)
console.log("ORIGINAL")
console.log(a,b,c)

const mathOperation = {
    add,
    subtract,
    multiply
}

//Prepare the object to be exported
//module.exports can be only used one time
module.exports = mathOperation