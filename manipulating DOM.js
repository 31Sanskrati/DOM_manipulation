//Navigating by id or class in DOM or HTML
let main = document.getElementById('main');
console.log(main);
let nav = document.getElementById('nav');
console.log(nav);
//nav.innerHTMl for checking elements in nav
//nav.innerHTML = "hhgfifrf" -->for changing inner html

let lele = document.getElementsByClassName('container');
console.log(lele);
//as there are two container so for selecting first use lele[0]

//will return first container with class container
let sel = document.querySelector('.container');
console.log("Selectors returns ", sel);

let sel2 = document.querySelectorAll('#nav>li');
console.log("Selectors returns ", sel2);
//sel[2].innerHtML =" " --> for changing elements