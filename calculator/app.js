let display=document.querySelector("input");
let buttons=document.querySelectorAll("button");

let string="";
let array=Array.from(buttons);
array.forEach((button)=>{
button.addEventListener("click",(key)=>{

  if(key.target.innerHTML=="="){
    console.log("there is equal to sign thus evaluation is required");
    string=eval(string);
    display.value=string;
  }
else if(key.target.innerHTML=="AC"){
  console.log("there is null");
  string=string.slice(0,string.length-1);
  display.value=string;
}
else if(key.target.innerHTML=="DEL"){
  console.log("there is null");
  string="";
  display.value=string;
}
  else{
  console.log(key.target.innerText);
  string=string+key.target.innerText;
   display.value=string;}
});
});

