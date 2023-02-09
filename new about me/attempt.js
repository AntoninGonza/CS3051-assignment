const element = document.querySelector("body");
element.style.backgroundColor= '#3b3833';
element.style.fontFamily= "Monospace"

const div1 = document.createElement("div");
const div2 = document.createElement("div");

const title = document.createElement("h1");
title.style.color = 'red';
const h3 = document.createElement("h3");
h3.style.color = 'cyan';
const p1 = document.createElement("p");
p1.style.color = 'goldenrod';
const p2 = document.createElement("p");
p2.style.color = 'goldenrod';
const list = document.createElement("li");
list.style.color = 'purple';
const list2 = document.createElement("li");
list2.style.color = 'purple';
const image = document.createElement("img");
image.src = "drawingAnto.png";
image.style.margin = "20px";
image.style.width = "300px";
const websites = document.createElement("p")
websites.style.color = '#22c735';
const web1= document.createElement("a");
const web2 = document.createElement("a");
const web3 = document.createElement("a");
web1.href = "https://www.twitch.tv/";
web1.target = "_blank";
web1.style.color = "cyan";
web2.target = "_blank";
web2.style.color = "cyan";
web3.target = "_blank";
web3.style.color = "cyan";
web2.href = "https://twitter.com/home";
web3.href = "https://fr.finance.yahoo.com/";
const WebList1 = document.createElement("li");
WebList1.style.color = "cyan";
const WebList2 = document.createElement("li");
WebList2.style.color = "cyan";
const WebList3 = document.createElement("li");
WebList3.style.color = "cyan";


let table = document.createElement("table");
let row1=  document.createElement("tr");
row1.innerHTML="<td>Places I lived </td> <td>Years</td>";
row1.style.border= " 2px solid white";
let row2=  document.createElement("tr");
row2.innerHTML="<td>Thaïland</td> <td>2002-2003</td>";
row2.style.border= " 2px solid white";
let row3=  document.createElement("tr");
row3.innerHTML="<td>Thaïwan</td> <td>2003-2005</td>";
row3.style.border= " 2px solid white";
let row4=  document.createElement("tr");
row4.innerHTML="<td>Paris</td> <td>2005-2008</td>";
row4.style.border= " 2px solid white";
let row5=  document.createElement("tr");
row5.innerHTML="<td>Toulon</td> <td>2008-2012</td>";
row5.style.border= " 2px solid white";
let row6=  document.createElement("tr");
row6.innerHTML="<td>Brussels</td> <td>2012-2017</td>";
row6.style.border= " 2px solid white";
let row7=  document.createElement("tr");
row7.innerHTML="<td>Maisons-Laffite</td> <td>2017-now</td>";
row7.style.border= " 2px solid white";
table.style.borderCollapse='collapse';
table.style.border= " 2px solid white";
table.style.margin= "20px";
table.style.color = "yellow";


//let col = document.querySelectorAll("td");
//col.style.border= " 2px solid white";

const about = document.createTextNode("About me:");
const name1 = document.createTextNode("My name is Antonin Gonzalez but you can call me Anton");
const details = document.createTextNode("I'm French, I currently live in the 78th in Maisons-Laffite");
const enjoy = document.createTextNode("I really enjoy:");
const activity = document.createTextNode("playing video games");
const activity2 = document.createTextNode("swimming");
const web = document.createTextNode("websites I like:");
const W1 = document.createTextNode("first website is twitch");
const W2 = document.createTextNode("second website is twitter");
const W3 = document.createTextNode("third website is yahou finance");


title.appendChild(about);
h3.appendChild(name1);
p1.appendChild(details);
p2.appendChild(enjoy);
list.appendChild(activity);
list2.appendChild(activity2);
websites.appendChild(web);
web1.appendChild(W1);
web2.appendChild(W2);
web3.appendChild(W3);
WebList1.appendChild(web1);
WebList2.appendChild(web2);
WebList3.appendChild(web3);
table.appendChild(row1);
table.appendChild(row2);
table.appendChild(row3);
table.appendChild(row4);
table.appendChild(row5);
table.appendChild(row6);
table.appendChild(row7);
div1.appendChild(image);
div2.appendChild(table);

element.appendChild(title);
element.appendChild(h3);
element.appendChild(p1);
element.appendChild(p2);
element.appendChild(list);
element.appendChild(list2);
element.appendChild(image);
element.appendChild(websites);
element.appendChild(WebList1);
element.appendChild(WebList2);
element.appendChild(WebList3);
element.appendChild(table);
element.appendChild(div1);
element.appendChild(div2);

