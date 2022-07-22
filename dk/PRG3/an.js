var n=prompt(" Enter the number");
s=0;
l=n.length;
for(i=0;i<l;i++)
{
    s+=n[i]**l;
}
if(n==s)
{
alert(n+"it is armstrong");
}
else{
    alert(n+"it is not armstg");
}