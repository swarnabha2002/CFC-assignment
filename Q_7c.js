let n=5;
let row=0;
while(row<n)
{
    let col=0;
    let print_variable=1;
    while(col<(2*n))
    {
        if((col>=4-row)&&(col<=4+row))
        {
        process.stdout.write((print_variable)+" ");
        (col<n-1)?(print_variable++):(print_variable--);
        }
        else
        process.stdout.write("  ");
        col++;
    }
    process.stdout.write("\n");
    row+=1;
}