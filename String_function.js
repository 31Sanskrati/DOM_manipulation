var str = "My name is Anni";
console.log(str);

var replace = str.replace('Anni', 'Sanskrati');
console.log(str);
console.log(replace);

//will convert str to completely lower or upper case
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//concat works as +
var newString = str.concat(' or just "An"');
console.log(newString);

//trim --> trim spacesw from front and back side
var spaces = "   I   Am A            JAiN     ";
console.log(spaces.trim());

//gives the first occurance of a substring
var position = str.indexOf('a');
console.log(position);

//Last occurance
position = str.lastIndexOf('i'); 
console.log(position);

var substr = str.slice(5,9); //in place of slice substring can be used 
console.log(substr);

var sub = str.substr(1,5);
//starts with 0 else is same as slice
console.log(sub);

var char5 = str.charAt(5);
console.log(char5);
console.log(str[4]);

//let is more useful than var
//If else conditional
let age = 18;
if(age<18){
    console.log('You can drink wasser.');
}
else if(age=18) {
    console.log('You can drink Tee mit milch.');
} 
else{
    console.log('You can drink caffee.');
}

//Switch case
const cups = 20;
switch (cups) {
    case 20:
        console.log('You have odered 20 cups.')
        break;

    default:
        console.log('You odered less.')
        break;
}