/*

id togglato class vediXoY

20210101_1845

*/


 document.getElementById("togglato").innerHTML=
  '   <style> ' + 
  '   .togXbordo,.togYbordo  { ' + 
  '   position:fixed !important; ' + 
  '   bottom:0rem !important;  ' + 
  '   right:0rem !important; ' + 
  '   margin:1rem; ' + 
  '   cursor:pointer !important; ' + 
  '   font-size:1rem !important; ' + 
  '   font-family:monospace !important; ' + 
  '   border-radius:0.1rem  !important; ' + 
  '  ' + 
  '   } ' + 
  '    ' + 
  '   .togXbordo{ ' + 
  '   border:solid 0.2rem indigo !important; ' + 
  '   border:solid 0.2rem rgba(75,0,130,1) !important; ' + 
  '   background-color:orange !important; ' + 
  '   background-color:rgba(255,165,0,1) !important; ' + 
  '   } ' + 
  '  ' + 
  '   .togYbordo{ ' + 
  '   border:solid 0.2rem rgba(255,165,0,1) !important; ' + 
  '   background-color:rgba(75,0,130,1) !important;  ' + 
  '   } ' + 
  '    ' + 
  '   </style> ' + 
  '  ' + 
  '  ' + 
  '  ' + 
  ' <span onclick="vedi()"  class="togYbordo nascondiY vediY"> ' + 
  '   &nbsp; ' + 
  ' </span> ' + 
  ' <span onclick="nascondi()" class="togXbordo nascondiX vediX"> ' + 
  '   &nbsp; ' + 
  ' </span> ' + 
  '  ' + 
  '  '
  ;
  
  function nascondi(){
 elemento=document.querySelector(".vediXoY");
 elemento.style.visibility="hidden";
 elemento=document.querySelector(".nascondiX");
 elemento.style.visibility="hidden";
 elemento=document.querySelector(".vediY");
 elemento.style.visibility="visible";
 
 }
 
 function vedi(){
 elemento=document.querySelector(".vediXoY");
 elemento.style.visibility="visible";
 elemento=document.querySelector(".nascondiY");
 elemento.style.visibility="hidden";
 elemento=document.querySelector(".vediX");
 elemento.style.visibility="visible";
 
 }


 
  