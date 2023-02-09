let code = "";
const key = "7914";
const d = document.getElementById("door");
const bt = document.querySelectorALL("button");

function press(val){
const x = val.textContent;

if(code.length < 4){
    code += x;
}
if(code.length == 4 & code == key){
    d.src = "opened.JPG";
    setTimeout(close, 5000);
}
if(code.length == 4 & code != key){
    code="";
}
}

function close(){
    d.src = "closed.JPG";
    code="";
}

