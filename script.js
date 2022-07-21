const submitbutton = document.getElementById("generatebutton");
console.log(submitbutton);
const boxes =document.getElementById("grid");
submitbutton.onclick = () =>{
    var inputvalue =document.getElementById("textBox").value;
    console.log(inputvalue);
for(i=1;i<=inputvalue;i++){
var div1 = document.createElement("div");
console.log(div1);
boxes.append(div1);
div1.style.width = "50px";
div1.style.height = "50px";
div1.style.background = "powderblue";
div1.style.color = "black";
div1.style.margin = "1vh 2vh";
div1.innerHTML = i;}
submitbutton.hidden =true;

}
