/*  menu (da togglare) class vediXoY  */
/*   20210101_1745                    */
/*

  per funzionare come menu collapse
  necessita di bootstrap alfabeta-bs
  
*/


document.getElementById("menu").innerHTML=
' <section style="position:fixed; bottom:0; left:0;'+
' border-bottom:solid 1rem transparent !important; '+
' border-left:solid 0.5rem transparent !important;'+
' border-right:solid 0.5rem transparent !important;'+
 
' width:100%; text-align:left; "> '+

' <span style="margin-right:2.3rem !important;'+
' padding:0.2rem;'+
' background-color:oldlace; '+
' border-radius:0.4rem !important;'+
' border:solid 0.05rem navy !important;"> '+ 	
' '+ 	

' <button type="button" class="btn shadow-none bg-warning rounded" '+ 	
' data-toggle="collapse" data-target="#collapsemenuapdp" '+ 	
' aria-expanded="false" '+ 	
' style="position:fixed; top:2.5rem; right:0; /* border-radius:0rem !important; border:solid 0rem black; */ "> '+ 	
' '+ 	
' <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-back" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/> '+ 	
' </svg> '+ 	' '+ 	
' </button> '+	 	


' <span style="visibility:hidden !important;">menu</span> '+


' <a href="#fine"> '+ 	
' <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /> <path fill="maroon" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/> '+ 	
' </svg></a> '+ 	
' <span style="visibility:hidden !important;">menu</span> '+ 	
' '+ 	

' <a href="#"> '+ 	
' <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"> <path d="M0 0h24v24H0V0z" fill="none"/> <path fill="maroon" d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/> '+ 	
' </svg></a> '+ 	
' '+	 	
' </span> '+ 

' '+ 	' '+ 	
' '+ 	' '+ 	
' '+ 	' '+ 	

' <div id="collapsemenuapdp" '+
' class="collapse dropdown-menuY border-0" '+ 	
' style=" padding:0rem !important; '+ 	
' '+ 	
' background-color:rgba(0,85,85,0); '+ 	
' border-left:solid 0.1rem rgba(255,170,0,1) !important; '+ 	
' border-radius:0rem !important; '+ 	
' background-color:rgba(255,170,0,0.85); "> '+ 


' <ul style="border:solid 0.25rem indigo !important; '+
' height:11.5rem !important; '+
' overflow:auto !important; border-radius:0.2rem !important; ">'+


' 	<a class="btn-warning rounded" '+ 
' href="#argomento_"> '+ 	
' 	<span class="rounded p-1 fw-bold" style="background-color:indigo;color:oldlace;border:solid 0.1rem indigo;">'+
' argomento_</span></a> '+



' <p class="my-1"><hr/></p> '+
' <span style="font-size:small !important;font-weight:bold !important;">'+
' note: </span> '+
' '+
' <a href="#nota_" class="note-cerchietto mr-1"> '+
' nota_ </a> '+


' '+
' '+
' '+


' 	 '+ 	' '+ 	
' </ul> '+

' <span class="p-0" style="font-size:small !important; background-color:indigo;color:oldlace;">	 '+ 	
' alfabeta 20210101_1745 '+
' </span>	 '+


' 	<a class="ml-2 btn-warning rounded" '+ 
' href="http://venexiatre.altervista.org/WORKOU/OGGI/20191119/20191119f_1-CREEK.html"> '+ 	
' 	<span class="rounded p-1 fw-bold" style="background-color:oldlace;color:indigo;border:solid 0.1rem indigo;box-shadow:0.2rem 0.2rem 0.4rem black !important;">'+
' home_page</span></a> '+ 

' </div> '+
' '+
' </section> '+
'  '
;


