//Time declaration
const time = new Date()
const hours = time.getHours()
const minutes = time.getMinutes()
const seconds = time.getSeconds()  
const day = time.getDay()
const month = time.getMonth()

console.log(time, "time")
console.log(hours, "hours")
console.log(minutes, "minutes")
console.log(seconds, "seconds")
console.log(day, "day")
console.log(month, "month")

//Convert to Object Data Type
const timeDeclaration = {
    time,
    hours,
    minutes,
    seconds,
    day,
    month
}

//Prepare the object to be exported
//module.exports can be only used one time
module.exports = timeDeclaration