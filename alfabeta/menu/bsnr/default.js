/*  MENU BSNR COMPACT  */
/*    202100110 1015   */



document.getElementById("alfabeta_menu_bsnr").innerHTML=
' <div id="alfabeta_menu_bsnr_contenitore"></div> '+
' <div id="alfabeta_togglato_bsnr"></div> '+

'  ';





/*   menu (da togglare) class vediXoY */
/*   20210110_0930                   */
/*  

per funzionare come menu collapse
necessita di bootstrap alfabeta-bs
html asterisk pt mono

*/


document.getElementById("alfabeta_menu_bsnr_contenitore").innerHTML=
' <link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet"> '+


' <div style=" '+
' position:fixed !important; '+
' bottom:0rem !important; '+
' left:0rem !important; '+

' margin-left:0.5% !important; '+
' margin-right:0.5% !important; '+

' background-color:oldlace !important; '+
' background-color:rgba(253,245,230,0.95) !important; '+


' width:99% !important; '+
' height:auto !important; '+
' font-size:1.1rem !important; '+
' '+
' '+
' text-align:left !important; '+
' '+
' border:solid 0.2rem transparent !important; '+
' '+
' '+
' "> '+



' <button type="button" '+
' class="btn shadow-none '+
' bg-warning rounded" '+ 
' data-toggle="collapse" '+
' data-target="#COLLAPSE_MENU" '+ 
' aria-expanded="false" '+ 
' style="position:fixed !important; '+
' top:2.5rem !important; right:0 !important; '+
' top:5rem !important; right:0 !important; '+
' font-size:1rem !important; '+
' "> '+ 

' '+ 
' <svg width="1rem" height="1rem" '+
' viewBox="0 0 16 16" '+
' class="bi bi-back" '+
' fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/> '+ 
' </svg> '+ ' '+ 
' </button> '+



' <span style=" '+
' margin-left:2.55rem !important; '+

' padding:0.2rem !important;'+

' background-color:oldlace !important; '+
' background-color:rgba(253,245,230,1) !important; '+

' font-size:1.1rem !important; '+

' border-radius:0.4rem !important;'+
' border:solid 0.05rem navy !important;"> '+ 

' <a href="#fine"> '+ 
' <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /> <path fill="maroon" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/> '+ 
' </svg></a> '+ 



' <span style="'+
' visibility:hidden !important; '+
' display:inline!important; '+
' font-size:0.45rem !important; '+
' border:solid 0.2rem transparent !important; '+
' ">menu</span> '+ 
' '+ 



' <a href="#"> '+ 
' <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"> <path d="M0 0h24v24H0V0z" fill="none"/> <path fill="maroon" d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/> '+ 
' </svg></a> '+ 
' '+ 
' </span> '+ 

' '+









' <div '+
' id="COLLAPSE_MENU" '+
' class="collapse dropdown-menuY border-0" '+
' style=" '+
' margin-left:2.41rem !important; '+
' margin-right:2.41rem !important; '+
' margin-bottom:2rem !important; '+
' border:solid 0.2rem transparent !important;" > '+

' '+

' <ul style="'+
' border:solid 0.25rem indigo !important; '+
' border:solid 0.10rem rgba(75,0,130,1) !important; '+
' height:11.5rem !important; '+
' overflow:auto !important; '+
' border-radius:0.2rem !important; ">'+



' <div id="alfabeta_menu_bsnr_href"></div> '+




'  '+



' '+
' '+
' '+


' '+ ' '+ 
' </ul> '+


' '+
' '+
' '+
' <div id="alfabeta_menu_copyright_bsnr"></div> '+
' '+
' '+
' '+
' '+
' '+
' </div> '+
' </div> '+
' '+

' '
;


document.getElementById("alfabeta_menu_bsnr_href").innerHTML=
' '+
' '+

' <a class="btn rounded" '+ 
' href="http://beatsupernovarasa.altervista.org/index.html"> '+ 
' <span class="rounded p-1 fw-bold" '+
' style=" '+
' background-color:indigo !important; '+
' color:oldlace !important; '+
' font-size:small !important;'+
' border:solid 0.1rem indigo !important; ">'+
' beatsupernova_home  </span></a> '+



' <a class="btn rounded" '+ 
' href="http://beatsupernovarasa.altervista.org/zap/thebeats/thebeats.html"> '+ 
' <span class="rounded p-1 fw-bold" '+
' style=" '+
' background-color:indigo !important; '+
' color:oldlace !important; '+
' font-size:small !important;'+
' border:solid 0.1rem indigo !important; ">'+
' the_list  </span></a> '+



' <a class="btn rounded" '+ 
' href="http://beatsupernovarasa.altervista.org/zap/thebeats/pics.html"> '+ 
' <span class="rounded p-1 fw-bold" '+
' style=" '+
' background-color:indigo !important; '+
' color:oldlace !important; '+
' font-size:small !important;'+
' border:solid 0.1rem indigo !important; ">'+
' beat artists pics  </span></a> '+




' <a class="btn rounded" '+ 
' href="http://beatsupernovarasa.altervista.org/zap/thebeats/poster.html"> '+ 
' <span class="rounded p-1 fw-bold" '+
' style=" '+
' background-color:indigo !important; '+
' color:oldlace !important; '+
' font-size:small !important;'+
' border:solid 0.1rem indigo !important; ">'+
' poster  </span></a> '+




' <a class="btn rounded" '+ 
' href="http://beatsupernovarasa.altervista.org/zap/thebeats/postcards.html"> '+ 
' <span class="rounded p-1 fw-bold" '+
' style=" '+
' background-color:indigo !important; '+
' color:oldlace !important; '+
' font-size:small !important;'+
' border:solid 0.1rem indigo !important; ">'+
' postcards  </span></a> '+




' <a class="btn rounded" '+ 
' href="http://beatsupernovarasa.altervista.org/zap/thebeats/extras.html"> '+ 
' <span class="rounded p-1 fw-bold" '+
' style=" '+
' background-color:indigo !important; '+
' color:oldlace !important; '+
' font-size:small !important;'+
' border:solid 0.1rem indigo !important; ">'+
' extras </span></a> '+


' '+



' '+
' ';


/*

id alfabeta_togglato_bsnr class vediXoY

20210102_1245

posizionato in linea con
la nuova versione

*/


document.getElementById("alfabeta_togglato_bsnr").innerHTML=
' <style> ' + 
' .togXbordo,.togYbordo { ' + 
' position:fixed !important; ' + 
' bottom:0rem !important; ' + 
' right:1.0rem !important; ' + 
' margin:0.5rem; ' +
' margin-bottom:0.15rem; ' + 
' margin-right:0rem; ' + 
' cursor:pointer !important; ' + 
' font-size:1rem !important; ' + 
' font-family:monospace !important; ' + 
' border-radius:0.20rem !important; ' + 
' ' + 
' } ' + 
' ' + 
' .togXbordo{ ' + 
' border:solid 0.2rem indigo !important; ' + 
' border:solid 0.10rem rgba(75,0,130,0.75) !important; ' + 
' background-color:orange !important; ' + 
' background-color:rgba(255,165,0,1) !important; ' + 
' } ' + 
' ' + 
' .togYbordo{ ' + 
' border:solid 0.10rem rgba(255,165,0,0.75) !important; ' + 
' background-color:rgba(75,0,130,1) !important; ' + 
' } ' + 
' ' + 
' </style> ' + 
' ' + 
' ' + 
' ' + 
' <span onclick="vedi()" class="togYbordo nascondiY vediY"> ' + 
' &nbsp; ' + 
' </span> ' + 
' <span onclick="nascondi()" class="togXbordo nascondiX vediX"> ' + 
' &nbsp; ' + 
' </span> ' + 
' ' + 
' '
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


