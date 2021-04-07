let step=0;
let num=1;
let check=0;
while(num<100)
{
    if(num%2==0)
    {
        if(check==step)
        {
            process.stdout.write(num+" ");
            check=0;
            if(step!=0)
            {
                step+=2;
            }
            else{
                step++;
            }
        }
        else
        {
            check++;
        }
    }
    num++;
}