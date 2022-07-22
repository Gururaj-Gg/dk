var n= prompt("Enter the number");
s=0;
m=""
for(i=1;i<=n;i++){
    s=i*i;
    document.write("<table border='1'><tr><td>"+i+"</td><td>"+s+"</td></tr>")
    m+=i+"\n"
    
}