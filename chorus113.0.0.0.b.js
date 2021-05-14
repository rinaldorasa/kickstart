
document.getElementById("chorus113.0.0.0.b").innerHTML=
''+
''+
'<table class="table" style="text-align:center;">    '+
'<tr>  '+
'  '+
'    <td style="width:100%;"> '+
'   '+
'<button type="button" class="btn btn-light" data-toggle="collapse" data-target="#C113" onclick="setHalfVolume()"'+
' style="width:60%; background-color:#ffdf80; font-family:monospace;"> '+
'Jack Kerouac Mexico City Blues <br/> Chorus 113 by Johnny Depp </button> '+
'<div id="C113" class="collapse" style=" overflow:hidden!important;">'+
' <audio id="AudioVolume" width="320" height="176" controls>'+
' <source src="http://beatsupernovarasa.com/musica/113.mp3" type="audio/mp3"> '+
'Your browser does not support HTML5 video. </audio>'+
'  </div>'+
'    '+
'    </td> '+
'</tr>   '+
'</table> '+
'';

var vid = document.getElementById("AudioVolume"); function getVolume() { alert(vid.volume); } function setHalfVolume() { vid.volume = 0.2; }



