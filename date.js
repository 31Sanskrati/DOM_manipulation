console.log("My name is San")
let now = new Date();
console.log(now);

let dt = new Date(0);
console.log(dt);

let newDate = new Date(3820, 7, 23, 9, 34, 2, 32);
console.log(newDate);

let yr = newDate.getFullYear();
console.log("The year is ", yr);
let month = newDate.getMonth();
console.log("The month is ", month);

newDate.setDate(15);
console.log(newDate);

setInterval(updateTime, 1000);
function updateTime() {
   time.innerHTML = new Date();
}