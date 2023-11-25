var num=0;
function count(){
    num++;
    var text=document.getElementById("counter");
    text.innerHTML=num;
    
}
count();

function rev(){
    num--;
    var text=document.getElementById("counter");
    text.innerHTML=num;
}
rev();
function reset(){
    num=0;
    var text=document.getElementById("counter");
    text.innerHTML=num;
}
reset();