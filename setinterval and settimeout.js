console.log('This is console');
// setTimeout --> run only once after interval
function greet(name) {
    console.log("Hello! Good Morning " + name)
}
// setTimeout(greet, 3000, 'Anni');//time in milisec

// timeOut = setTimeout(greet, 3000, 'Anni');//time in milisec
// console.log(timeOut)
//will give an unique id used to clear timeout
//clearTimeout(id)


//setInterval --> run continously after interval of time
// setInterval(greet, 2000);

function displaytime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displaytime, 1000);