let n=5;
let row=1;
while(row<2*n)
{
    let column=1;
    while(column<(2*n))
    {
        process.stdout.write(""+Math.min(row,column));
        column++;
    }
    console.log("\n");
    row++;
}