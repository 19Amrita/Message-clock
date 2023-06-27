import React from "react";
import  ReactDOM  from 'react-dom';
import "./index.css";
// new Date (year,month,day,hours,minutes,seconds)
let recdate=new Date();
recdate=recdate.getHours(2023,6,8,24);
let updatetime="";
const cssStyle = { };

if(recdate>=1 && recdate<12){
 updatetime="Good Morning";
 cssStyle.color="green";
 //cssStyle.backgroundImage= "url(https://picsum.photos/100/300)";
}
else if(recdate>=12 && recdate<19){
  updatetime="Good AfterNoon";
 cssStyle.color='red';
 //cssStyle.backgroundImage= "url(https://picsum.photos/250/300)";
}
else{
  updatetime="Good Night";
  cssStyle.color="Black";
 // cssStyle.backgroundImage= "url(https://picsum.photos/300/300)";
}
ReactDOM.render(
<>
<div>
  <h1>
   Hello Guys!! <span style={cssStyle}> {updatetime} </span>
  </h1>
  </div> 
</>,
document.getElementById('root')
);

