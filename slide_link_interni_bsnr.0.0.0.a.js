
document.getElementById("slide_link_interni_bsnr").innerHTML=
''+
''+
'<section STYLE="TEXT-ALIGN:CENTER;">    '+
'<article style="font-variant:small-caps;" class="shadow-sm p-3 mb-5 rounded"><style>.ListaArgomentiBSN { font-size:22px; font-weight:bold; }</style>    '+
'<div class="container" style=""><div style="font-family:\'PT Mono\',monospace;">    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/thebeats/thebeats.htm" class="ListaArgomentiBSN">BEAT SUPERNOVA The List </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/thebeats/archives.htm" class="ListaArgomentiBSN">BEAT SUPERNOVA ARCHIVES </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/beatpics/friscokid19730117.htm" class="ListaArgomentiBSN">BEAT GROUP PHOTO </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/thebeats/writers.htm" class="ListaArgomentiBSN">WRITINGS OPINION </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/thebeats/pics.htm" class="ListaArgomentiBSN"> BEAT ARTISTS </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/beatpics/poster.htm" class="ListaArgomentiBSN"> BEAT POSTER </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/thebeats/nampoets.htm" class="ListaArgomentiBSN"> POETS </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/thebeats/postcard.htm" class="ListaArgomentiBSN"> POSTCARDS </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/thebeats/postcard.htm" class="ListaArgomentiBSN"> POSTCARDS </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/Cherry98/artfestival.htm" class="ListaArgomentiBSN"> cherry valley artfestival 1998 </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/bsnLINKS.htm" class="ListaArgomentiBSN"> LINKS </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/Lectures/extras.htm" class="ListaArgomentiBSN"> ExTrAs </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/Lectures/Lectures.htm" class="ListaArgomentiBSN"> Lectures </a></span>    '+
'<span class="miaSlide"><a href="http://www.beatsupernovarasa.com/diario.htm" class="ListaArgomentiBSN"> 	Journal </a></span>    '+
'<br/>    '+
' <span> <button class="my-1 btn btn-sm btn-warning" onclick="plusDivs(-1, 0)" style="border-radius:4px; font-size:24px; color:FireBrick; font-size:bold; ">&#10094; </button> </span>    '+
' <span>&nbsp;</span>    '+
' <span> <button class="my-1 btn btn-sm btn-warning"  onclick="plusDivs(1, 0)" style="border-radius:4px; font-size:24px; font-size:24px; color:FireBrick; font-size:bold; ">&#10095; </button>    '+
' </span>    '+
'     '+
'</div>    '+
'    '+
'    '+
'</div>    '+
'</article>    '+
'</section>  '
'';


var slideIndice = [1,1];var slideId = ["miaSlide"];showDivs(1, 0);showDivs(1, 1);function plusDivs(n, no) { showDivs(slideIndice[no] += n, no);};function showDivs(n, no) { var i; var x = document.getElementsByClassName(slideId[no]); if (n > x.length) {slideIndice[no] = 1} if (n < 1) {slideIndice[no] = x.length} for (i = 0; i < x.length; i++) { x[i].style.display = "none";  }; x[slideIndice[no]-1].style.display = "block"; };


