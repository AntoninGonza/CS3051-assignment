let content = document.getElementById('doc');
let radios = document.getElementsByName('number');
let checkedradio = radios[0];
let textbox = document.createElement('input');
textbox.type='text';
textbox.id= "tb";
textbox.name= "tbox";
let currentradio;
let textval = ""+textbox.value;
let labels= document.querySelectorAll('label');
let currentlabel = "";
let label = document.createElement('label')
label.htmlFor ='tbox';
let enterbutt = document.createElement('button');
enterbutt.textContent="Enter";
enterbutt.id = "ebutt";
enterbutt.className="content";
enterbutt.onclick= generateoutput;
let output= document.getElementById("output");
let inputs = document.createElement('div');
inputs.className="content";
let s_value_ans="";
let required=0;
textbox.addEventListener("keydown",keygenerateoutput);


function generatebox(){

    for(let index = 0; index < radios.length; index++){
        if(radios[index].checked){
            checkedradio = radios[index];
        }}

    if(currentradio!== checkedradio){
    output.innerHTML="";
    textbox.value = "";
    if(checkedradio.id=="SSN"){
        required=9;
        textbox.maxLength =required;
    }
    if(checkedradio.id=="FR"){
        required=10;
        textbox.maxLength =required;
    }
    if(checkedradio.id=="US"){
        required=10;
        textbox.maxLength =required;
    }
    
    for(let index = 0; index < labels.length; index++){
        if(labels[index].htmlFor==checkedradio.value){
           label.textContent= labels[index].textContent+": "
        }
    }
    inputs.innerHTML="";
    currentradio= checkedradio;
    inputs.appendChild(label);
    inputs.appendChild(textbox);

    content.appendChild(inputs);
    content.appendChild(enterbutt);
    
}
}
function generateoutput(){
    textval=textbox.value;
    if(textval.length<required){
        alert("not enough numbers")
    }
    else{
                if(isNaN(Number(textval))){
            alert("it contains letter");
        }
        else{

    output.innerHTML="";
    if(checkedradio.id=="SSN"){
        s_value_ans= textval.substring(0,3)+"-"+textval.substring(3,5)+"-"+textval.substring(5);    
    }
    if(checkedradio.id=="FR"){
        s_value_ans= textval.substring(0,2)+"."+textval.substring(2,4)+"."+textval.substring(4,6)+"."+textval.substring(6,8)+"."+textval.substring(8);
    }
    if(checkedradio.id=="US"){
        s_value_ans= "("+ textval.substring(0,3)+")-"+textval.substring(3,7)+"-"+textval.substring(7);
    }

    let outputlabel= document.createElement('p');
    let outputcontent=document.createElement('p');
    outputlabel.className='out';

    outputcontent.className= "out";
    outputcontent.textContent= s_value_ans;
    outputlabel.textContent= label.textContent;
    output.appendChild(outputlabel);
    output.appendChild(outputcontent);}}

}
function keygenerateoutput(e){
    textval=textbox.value;
    if ( e.code!=="Enter"){
        textbox.textContent = textval.slice(0,-1);
    }
    if(e.code==="Enter"){
    
    if(textval.length<required){
        alert("not enough numbers")
    }
    else{
        if(isNaN(Number(textval))){
            alert("it contains letter");
        }
        else{
    output.innerHTML="";
    if(checkedradio.id=="SSN"){
        s_value_ans= textval.substring(0,3)+"-"+textval.substring(3,5)+"-"+textval.substring(5);
    }
    if(checkedradio.id=="FR"){
        s_value_ans= textval.substring(0,2)+"."+textval.substring(2,4)+"."+textval.substring(4,6)+"."+textval.substring(6,8)+"."+textval.substring(8);
    }
    if(checkedradio.id=="US"){
        s_value_ans= "("+ textval.substring(0,3)+")-"+textval.substring(3,7)+"-"+textval.substring(7);
    }

    let outputlabel= document.createElement('p');
    let outputcontent=document.createElement('p');
    outputlabel.className='out';

    outputcontent.className= "out";
    outputcontent.textContent= s_value_ans;
    outputlabel.textContent= label.textContent;
    output.appendChild(outputlabel);
    output.appendChild(outputcontent);}}
    
    }
}