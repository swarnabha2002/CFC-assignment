const prompt = require('prompt-sync')();

let lno = prompt("Enter the larger number : ");
let sno = prompt("Enter the smaller number : ");


while(lno%sno != 0){
    lc = lno 
    lno = sno
    sno = lc%sno
}
console.log(sno);