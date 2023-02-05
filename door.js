let code = "";
let key = "7914";

function press(val){
    code +=`${val}`;
    for (let i = 0; i < code.length; i++){
        if(code[i]!= key[i]){
            code = `${val}`;
            break;
        }
    }
    door(code ==key);
}


function door(open){
    let d = document.querySelector("#door");
    let bt = document.querySelectorALL("button");
    if(open){
        d.src = "opened.JPG";
        for (let i = 0; i < bt.length; i++){
            bt[i].style.backgroundColor = '#7F7';
        }
        setTimeout(()=>{door(false)}, 5 * 1000);
    } else {
        d.src = "closed.JPG";
        for(let i = 0; i < bt.length; i++){
            bt[i].style.backgroundColor = '';
        }
    }
}