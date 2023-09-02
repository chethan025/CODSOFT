const disply=document.querySelector(".dspl")
const butns=document.querySelectorAll("button");
const spl=["%","*","/","-","+","=",];
let output="";

const calculate=(btnv)=>{
  if(btnv==="="&&btnv!==""){
    output=eval(output.replace("%","/100"));
  }
  else if(btnv==="AC"){
    output="";
  }
  else if(btnv==="C"){
    output=eval(output.toString().slice(0, -1));
  }
  else{
    if(output===""&&spl.includes(btnv)) return;
    output+=btnv;
  }
  disply.value=output;
};

butns.forEach((button)=>{
  button.addEventListener("click", (e)=>calculate(e.target.dataset.value));
});

