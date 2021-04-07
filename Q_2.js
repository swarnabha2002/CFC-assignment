const prompt = require('prompt-sync')();

let amount = prompt("Enter your amount : ");
let rate = prompt("Enter the rate : ");
let time = prompt("Enter number of years to get interest : ");

let SI = (amount*rate*time)/100;

console.log(SI);