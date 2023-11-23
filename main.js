var num=-1;
function count(){
    num=num+1;
    var text=document.getElementById("counter");
    text.innerHTML=num;
}
count();
var num2=101;
function bcount(){
    num2=num2-1;
    var text=document.getElementById("bcounter");
    text.innerHTML=num2;
}
bcount();