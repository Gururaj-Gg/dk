var n=prompt("Enter the number");
f1=0;
f2=1;
//console.log(f1+"\n"+f2);
document.writre("the fib series" + n + "<br> ");
document.write( f1 + "<br/>" + f2 +"<br/>");
for(i=3;i<=n;i++){
    f3=f1+f2;
    document.write(f3 + "<br/>");
    f1=f2;
    f2=f3;
}

