// "use strict";
const btnEl=document.querySelectorAll(".buttons button");
const outEl = document.getElementById("reviue");
const home =document.getElementById("cointainer");
const thanks =document.getElementById("thankpage");



var choise="0";

for (let i = 0; i < btnEl.length; i++) {
     btnEl[i].addEventListener("click",()=>{
         
     
     for (let j = 0; j < btnEl.length; j++) {
          btnEl[j].style.backgroundColor = "hsl(213, 19%, 27%)";
        }
        for (let k = 0; k < btnEl.length; k++) {
      btnEl[k].style.color = "hsl(216, 12%, 54%)";
        }
      btnEl[i].style.backgroundColor = "hsl(216, 12%, 54%)";
      btnEl[i].style.color = "white";
      choise=btnEl[i].innerHTML;
     
     })
}
function submit(choise) {
     home.hidden=true;
     thanks.hidden=false;
     outEl.innerText=`your ratting ${choise} out of 5`;
}
// console.log(thanks);
choise="0";
