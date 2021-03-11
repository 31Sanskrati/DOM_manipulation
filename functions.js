console.log("This is functions in js.")

function disc(naam, greet = "Guten Morgen "){ 
    let name3 = "Katze";
    console.log(naam + " is also known as " + name3);
    console.log(greet + " " +naam)
    console.log(naam + " is a jung");
}
let name1 = "Anni";
let name2 = "Gabriel";
let name3 = "Anna";
let name4 = "Jain";
let greet = "Hi!"

disc(name1, greet);
disc(name2); //will show the defult value of greet i.e Guten Morgen
disc(name3, greet);
disc(name4, greet);
// console.log(name1 +" is a good girl");
// console.log(name2 +" is a good girl");
// console.log(name3 +" is a good girl");
// console.log(name4 +" is a good girl");

function sum(a,b,c){
    let d = a+b+c;
    return d;
}

let check = sum(1,5,3);
console.log(check);

function compare1(x,y) {
    let greater = x>y;
    return greater;
}
function compare2(x,y) {
    let samller = x<y;
    return samller;
}
let com1 = compare1(10,5);
let com2 = compare2(10,5);
console.log("The first term is bigger " +com1);
console.log("The first term is smaller " +com2);