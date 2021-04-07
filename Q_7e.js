function factorial(n){
    let answer = 1;
    if (n == 0 && n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }

function combination(a,b){
    let num = factorial(a);
    let din = factorial(a-b)*factorial(b);
    return(num/din);
}

let m = 5;

let row = 0;

while(row < m){

    let col  = 0;
    while(col<= row){
        process.stdout.write((combination(row,col))+" ");
        col += 1;
    }
    process.stdout.write("\n");
    row += 1
}
