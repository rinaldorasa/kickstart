/************************************/
/*         acapopagina              */


"use strict";

let vers_acapopagina=
"<span style="+"background-color:orange;color:indigo;"+
+"font-weight:bold;"+
"> vers.20210628:10:15 </span>";


let  altezza_acapopagina_rem;
let  fontsize=dimmain;
let  fontsizesvg;
let  fontsizecar;
let  fontsizerem;
let  fontsizesvgcaret;
let  CHEVRON_UP_acapopagina;
let  CHEVRON_DOWN_acapopagina;
let  HOUSE_acapopagina;
let  MENU_acapopagina;
let  CARET_DOWN_acapopagina;

let  CCODE1; let  CCODE2;
let  CCODE3; let  CCODE4;
let  CCODE5; let  CCODE6; 




/*****************************************/
/**********definizione altezza************/

altezza_acapopagina_rem=(hFinestra*0.7)/16;


/* testo correzione fontsize   */

fontsize=dimmain/16;
fontsizesvg=fontsize*16;
fontsizecar=(fontsize)*(10/20);

if (fontsizecar>=2){alert("[FILE: acapopagina.20210627.13.15.js]  WARNING: FONTSIZE >= 2");}

fontsizerem="font-size:"+fontsizecar.toString()+"rem;";
fontsizesvgcaret=fontsizesvg*0.5;


 /* testo */
 let nota1; nota1="";

 let linkSnipet0="collegamento_0";
 
 let linkSnipet1="<span style="+fontsizerem+">collegamento_1";
 let linkSnipet2="<span style="+fontsizerem+">collegamento_2";
 let linkSnipet3="<span style="+fontsizerem+">collegamento_3";
 let linkSnipet4="<span style="+fontsizerem+">collegamento_4";
 let linkSnipet5="<span style="+fontsizerem+">collegamento_5";
 let linkSnipet6="<span style="+fontsizerem+">collegamento_6";






CHEVRON_UP_acapopagina='<svg xmlns="http://www.w3.org/2000/svg" width="'+fontsizesvg+'" height="'+fontsizesvg+'" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">'+
'<path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>'+
'</svg>';

CHEVRON_DOWN_acapopagina='<svg xmlns="http://www.w3.org/2000/svg" width="'+fontsizesvg+'" height="'+fontsizesvg+'" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">'+
'<path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>'+
'</svg>';

HOUSE_acapopagina='<svg xmlns="http://www.w3.org/2000/svg" width="'+fontsizesvg+'" height="'+fontsizesvg+'" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">'+
'<path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>'+
'<path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>'+
'</svg>';

MENU_acapopagina='<svg xmlns="http://www.w3.org/2000/svg" width="'+fontsizesvg+'" height="'+fontsizesvg+'" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>';

CARET_DOWN_acapopagina='<svg xmlns="http://www.w3.org/2000/svg" width="'+fontsizesvg*0.5+'" height="'+fontsizesvg*0.5+'" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16"><path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/></svg>';



/* elementi per la composizione del codice */
CCODE1='<article class="MARGINE_MIN_XY"><a class="bg-warning" data-bs-toggle="collapse"';
CCODE2='>'+CARET_DOWN_acapopagina+'</a><span class="MARGINE_MIN_XY">';
CCODE3='</span></span><span class="collapse"'; 
CCODE4='"><span class="card card-body">';
CCODE5='</span></article>';




document.getElementById("acapopagina").innerHTML=
'<section class="ACAPOPAGINA border border-success">'+
'<article style="position:relative;">'+
'<a href="#" style="margin-left:1rem;margin-right:1rem;font-variant:small-caps;font-weight:bold;">'+CHEVRON_UP_acapopagina+'</a>'+
'<a href="#fine" style="margin-left:1rem;margin-right:1rem;font-variant:small-caps;font-weight:bold;">'+CHEVRON_DOWN_acapopagina+'</a>'+
'  '+'  '+''+'  '+
'  '+'  '+'  '+'  '+'  '+'  '+'  '+
'  '+'  '+'  '+'  '+'  '+'  '+'  '+

'<a href="http://venexiatre.altervista.org/WORKOU/OGGI/20191119/20191119f_1-CREEK.html" style="position:absolute;top:0;right:0;margin-left:1rem;margin-right:1rem;font-variant:small-caps;font-weight:bold;">'+HOUSE_acapopagina+'</a>'+
'</article>'+
'</section>'+

/* in questa sezione ci stanno le voci prelevate da array o da variabili */

/* interlinea non visualizzata */
'<a href="#collapseMenu0" data-bs-toggle="collapse" style="margin-left:1rem;margin-right:1rem;font-variant:small-caps;font-weight:bold;">'+MENU_acapopagina+
/*------------^^^^^^^^^^*/
/*------------||||||||||*/
'<section id="collapseMenu0" class="collapse border border-3 border-danger" style="position:static;top:0;left:0;">'+
'<div class="border border-3 border-success bg-warning" style="margin:0 auto;width:'+dimmain+'rem;height:'+altezza_acapopagina_rem+'rem!important;">'+
'<div style="DISPLAY:NONE;">'+CCODE1+'href="#cpse0"'+CCODE2+linkSnipet1+CCODE3+'id="cpse0'+CCODE4+'Annotazioni0'+CCODE5+'</div>'+
/*-----------^^^^^^^^^^^^*/


CCODE1+'href="#cpse1"'+CCODE2+linkSnipet1+CCODE3+'id="cpse1'+CCODE4+'Annotazioni1'+CCODE5+
CCODE1+'href="#cpse2"'+CCODE2+linkSnipet2+CCODE3+'id="cpse2'+CCODE4+'Annotazioni2'+CCODE5+
CCODE1+'href="#cpse3"'+CCODE2+linkSnipet3+CCODE3+'id="cpse3'+CCODE4+'Annotazioni3'+CCODE5+
CCODE1+'href="#cpse4"'+CCODE2+linkSnipet4+CCODE3+'id="cpse4'+CCODE4+'Annotazioni4'+CCODE5+
CCODE1+'href="#cpse5"'+CCODE2+linkSnipet5+CCODE3+'id="cpse5'+CCODE4+'Annotazioni5'+CCODE5+
CCODE1+'href="#cpse6"'+CCODE2+linkSnipet6+CCODE3+'id="cpse6'+CCODE4+'Annotazioni6'+CCODE5+


'</div>'+
'</section>'+

'</a>'+
' <br> '+
'  '+'versione del programma==>  '+vers_acapopagina+' <br> '+
'  '+'schermo width==>  '+wFinestra+'px = '+wFinestra/16+'rem <br> '+
'  '+'schermo heigth==> '+hFinestra+'px = '+hFinestra/16+'rem <br> '+
'  '+'altezza_acapopagina_rem==> '+altezza_acapopagina_rem+'rem <br> '+

'  '+'schermoxmain width==>  '+dimmain+'rem <br> '+
'  '+'fontsize==>  '+fontsize+'rem <br> '+
'  '+'fontsizesvg==>  '+fontsizesvg+'px = '+fontsizesvg/16+'rem <br> '+
'  '+'fontsizecar==>  '+fontsizecar+'rem <br> '+
'  '+'fontsizesvgcaret==>  '+fontsizesvgcaret+'px =  '+fontsizesvgcaret/16+'rem  '+'  '+
'  '+'  '+'  '+'  '+'  '+'  '+'  '+



'';



/*

let reference;

CCODE1='<article class="MARGINE_MIN_XY"><a class="bg-warning" data-bs-toggle="collapse"';

'href="#collapse1"'

CCODE2='>'+CARET_DOWN_acapopagina+'</a><span class="MARGINE_MIN_XY">';

+linkSnipet1+

CCODE3='</span></span><span class="collapse"'; 

'id="collapse1'

CCODE4='"><span class="card card-body">';

'Annotazioni'

CCODE5='</span></article>';



*/
