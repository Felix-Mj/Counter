const cont = document.getElementById("count");
let count = 0;
cont.innerText = count;
function myfunctionDec(){
    count --;
    cont.innerText = count;
}
function myfunctionInc(){
    count ++;
    cont.innerText = count;
}
function reset(){
    count = 0;
    cont.innerText = count;
}