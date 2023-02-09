let element = document.querySelector('body');
element.style.backgroundColor= '#3b3833';
let content = document.createElement('div');
let about = document.createElement('h1');
about.textContent= "About me:";
about.style.color = "red"
let name1 = document.createElement('p');
name1.textContent="My name is Antonin Gonzalez but you can call me Anton";
name1.style.color = "goldenrod";
let place = document.createElement('p');
place.textContent="I'm French, I currently live in the 78th in Maisons-Laffite";
place.style.color = "goldenrod";
let text = document.createElement('p');
text.textContent="I enjoy:"
text.style.color = "goldenrod";
let activities = ["video games","swimming","math"];
let list = document.createElement('ul');
for(let x = 0; x<activities.length;x++){
    let elem = document.createElement('li');
    elem.textContent = activities[x];
    list.appendChild(elem);
    list.style.color = "purple";
}
let image = document.createElement('img');
image.src= "drawingAnto.png";
image.style.width= "200px";
let sites = document.createElement('h4');
sites.textContent="websites i like";
let links = [{name:"twitch",link:"https://www.twitch.tv/"}, {name:"twitter", link:"https://twitter.com/"} ,{name:"finance",link:"https://fr.finance.yahoo.com/"}]
let wlist= document.createElement('ul');

for(let x =0;x<links.length;x++){
    let newli= document.createElement('li');
    let newline= document.createElement('a');
    newline.textContent= links[x].name;
    newline.href= links[x].link;
    newline.target="_blank";
    newline.style.textDecoration="none";
    newline.style.color="cyan";
    newline.addEventListener("mouseenter",()=>{newline.style.color="white"})
    newline.addEventListener("mouseleave",()=>{newline.style.color="#bfa38a"})
    newli.appendChild(newline);
    wlist.appendChild(newli);
    wlist.style.color= "cyan";
}

let table = document.createElement('table');
let row1=  document.createElement('tr');
row1.innerHTML="<td>Places I lived</td> <td>Years</td>";
let row2=  document.createElement('tr');
row2.innerHTML="<td>Thaïland app</td> <td>2002-2003</td>";
let row3=  document.createElement('tr');
row3.innerHTML="<td>Thaïwan</td> <td>2003-2005</td>";
let row4=  document.createElement('tr');
row4.innerHTML="<td>Paris</td> <td>2005-2008</td>";
let row5=  document.createElement('tr');
row5.innerHTML="<td>Toulon</td> <td>2008-2012</td>";
let row6=  document.createElement('tr');
row6.innerHTML="<td>Brussels</td> <td>2012-2017</td>";
let row7=  document.createElement('tr');
row7.innerHTML="<td>Maisons-Laffite</td> <td>2017-now</td>";
element.appendChild(content);
content.appendChild(about);
content.appendChild(name1);
content.appendChild(place);
content.appendChild(text);
content.appendChild(list);
content.appendChild(image);
content.appendChild(sites);
content.appendChild(wlist);
table.appendChild(row1);
table.appendChild(row2);
table.appendChild(row3);
table.appendChild(row4);
table.appendChild(row5);
table.appendChild(row6);
table.appendChild(row7);
content.appendChild(table)
element.style.color="cyan";
element.style.fontFamily= "arial"

let give =document.querySelectorAll('td');
for(let x =0;x< give.length;x++){
    give[x].style.border= " 2px solid white";
    give[x].style.padding = "5px";
    give[x].style.color = "yellow";
}
table.style.borderCollapse='collapse';
