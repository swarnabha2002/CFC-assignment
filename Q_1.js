const prompt = require('prompt-sync')();

let credit = prompt("Enter your credits : ")

if(credit < 4500){
    console.log("Rising Star");
}
if(4500 <= credit && credit < 6000){
    console.log("Mega leader");
} 
if(6000 <= credit && credit < 7500){
    console.log("Gega leader");
} 
else if(credit >= 7500){
    console.log("Tera leader");
}
