function reversestring(str){
    const revArray = [];
    const length = str.length - 1;
      
    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
    return revArray.join('');
}

const prompt = require('prompt-sync')();

let num = prompt("Enter the number : ");

newnum = String(num);

console.log(Number(reversestring(newnum)));