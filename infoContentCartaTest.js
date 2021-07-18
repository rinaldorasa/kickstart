/*********************/
/*
infoContentCarta ARRAY
2021-07-18-10:48
GRAVE ACCENT x espressione {}

*/

let persona = {nome: 'Rinaldo', eta: 71};


infoContentCarta[0]=
` testo edito da  ${persona.nome} `+
`<div class="m-1 p-2">`+
` questo è un appunto scritto per controllare le dimensioni di questa finestra e la possibilità di formattare un testo indipendentemente da parte di user `+
` il contenuto di questo avviso è stato loaded da un file esterno e si sta facendo un ceck sull'aggiornamento del file stesso nella cache del browser`+
`<br>`+
` <b> `+
` ci potrebbe essere un drawback dovuto al fatto che i browser per velocizzare il loaded effettuano una cache che nel caso di aggiornamenti deve essere bypassata`+
` </b> `+

` un altro problema deriva dagli apostrofi in quanto questo testo è immesso nel programma della carta da una string delimitata appunto da apostrofi javascript il che complica abbastanza  `+

` in quanto un apostrofo testuale va a confliggere con l'apostrofo javascript quindi è necessario un carattere di escape per risolvere il problema che da parte di user non è di una semplicità assoluta`+

` <b> `+
` riflettere inoltre sulla possibilità che esistano anche altri caratteri  come le virgolette " che interferiscono con il file di testo creato dall'utente`+
` </b> `+


`<br>`+
` in un articolo tecnico di riferimento si trova la possibilità di sostituire la virgoletta singola con un altro carattere del codice ascii standard da 0 a 127`+
`<br>`+
`<p class="border border-2 border-info rounded bg-light">`+
` quotation mark==>34 &#34;`+`<br>`+
` apostrophe==>39  &#39;`+`<br>`+
` grave accent==>96  &#96;`+`<br>`+
`</p>`+

` <b><u>Questo è un l'esempio test per delimitatori </u></b> `+
` la string underlined è stata delimitata da grave accent`+
`  il passo ulteriore consiste nel trovare la maniera di scrive il grave accent usando la tastiera evitando il ricorso alla combinazione di tasti ALT96tastierino numerico`+

` inoltre effettuare un controllo accurato se il grave accent come delimitatore è accettato da tutti gli interpreti del codice javascript presenti nei maggiori browser`+
`  `+`<br>`+
` <a href="http://www.javascripter.net/faq/accentedcharacters.htm">Accented Characters and Ligatures
in HTML and JavaScript</a> `+`<br>`+
`  `+`<br>`+



`<p class="bg-warning rounded">  `+`<br>`+
` <p style="font-size:1.0rem;font-variant:small-caps;">StackExchange</p> `+
` Here is what the layout of an Italian keyboard looks like: `+
` <img src="https://i.stack.imgur.com/nbv47.png" alt="" style="width:70%;"> `+`<br>`+
` As you can see, the curly braces, which are absolutely necessary to write code in any of C, C++, JavaScript, Java, Objective-C, and others, appear in purple in this picture. This is because while the other characters can be seen visually as printed characters on most Italian keyboards, these purple characters are actually usually not printed on the keyboard's keys. These characters, found in the upper right corners of the given keys, can usually be generated with the following key combinations: `+
` (RIGHT SHIFT or LEFT SHIFT) + (RIGHT CTRL or LEFT CTRL) + (Alt or AltGR) + ([ or ]) `+`<br>`+
` (Actually as the MSKLC application shows, SHIFT + AltGr + [ and SHIFT + AltGr + ] are enough to generate the curly braces.) `+
` Characters such as the at (@) sign (called 'chiocciola' in Italian) and the hash (#) key (called 'cancelletto' in Italian) found in the lower right hand corner of the keyboard can be generated easily as follows (AltGr + @) or (AltGr + #). Such characters are also fundamental to programming as they can, for instance, be found in CSS, namely with media queries and with selectors referring to the id html attribute. `+`<br>`+
` <u>Upon further inspection, we can see that all of the US ASCII keyboard / programmer's keyboard are covered by the keys of the Italian keyboard, except for the following, which are the tilde, which is especially useful on the Linux command line and is used to refer to a user's home directory on such system, as well as the back-tick (grave accent), also known as the back-quote, which is also very useful on the Linux shell when we want to turn the output of a command into a command-line input. </u>`+`<br>`+
` So, here comes the question: `+`<br>`+
` With all those empty upper-right hand corners of keys, why isn't there a better way of generating these characters, perhaps through a CTRL-ALT-SHIFT modifier key combination? `+`<br>`+
` All I've been able to find regarding generation of these characters are the following ALT-codes: `+`<br>`+
` ALT code 96 corresponds to backtick `+`<br>`+
` <b>The basic Italian keyboard layout as shipped with Windows 7 has no way of typing the backtick (grave accent) or the tilde (~). I checked this using Microsoft Keyboard Layout Creator (MSKLC), with that layout loaded into it. I presume that this layout is more or less standard in Italy, though of course Microsoft might have its own oddities here.</b> `+`<br>`+
`  `+`<br>`+


` <a href="https://superuser.com/questions/667622/italian-keyboard-entering-tilde-and-backtick-characters-without-changin">Entering carattere backtick grave accent </a> `+`<br>`+
` </p> `+`<br>`+

` Il passo successivo è stato fatto cercando di effettuare i loaded dei file esterni javascript tenendo conto degli update dinamici `+`<br>`+
` <a href="https://stackoverflow.com/questions/3768768/loading-javascript-dynamically-and-how-to-check-if-the-script-exists">Loading a script dynamically is much more simple</a> `+`<br>`+
`<br>`+
` <xmp class='bg-warning'>`+
`var script = document.createElement('script');
script.onload = function () {
main_function();  // Main function to call or anything else or nothing  
};
script.src = "yourscript.js";
document.head.appendChild(script);  `+

` </xmp> `+`<br>`+
`  `+`<br>`+
` Questo metodo dinamico può funzionare con più file da caricare aggiungendo al <span class='btn btn-info'>nome</span> un postfisso esempio un numero   <span class='btn btn-info'>nome+1, nome+2, etc.</span> `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+
`  `+`<br>`+


`  `+
``+
`<br>`+
`<br>`+
`</div>`+


`     `+


``;




infoContentCarta[9]=

`<style> `+
`  `+
`span#cerchietto9{visibility:visible!important;}  `+
`  `+
`  `+
`  `+
`  `+
`</style>`+


`<div id="rifCARTA0" class="bg-light m-5 p-5" >`+
`<div style="margin:0 auto;text-align:center;">RIF RIP</div>`+

`<br>`+

` Questa finestra Ã¨ una card con le seguenti variabili: `+`<br>`+

//`intestazY____Rem ==>`+intestazY____Rem+` `+typeof(intestazY____Rem)+`<br>`+

//`dashbd_Badge_Rem*4.5 ==>`+dashbd_Badge_Rem*1+` `+typeof(dashbd_Badge_Rem*1)+`<br>`+

//`cartaX_______Rem*1.075 ==>`+cartaX_______Rem*1+` `+typeof(cartaX_______Rem*1)+`<br>`+
//`cartaY_______Rem*0.5 ==>`+cartaY_______Rem*1+` `+typeof(cartaY_______Rem*1)+`<br>`+

`<br>`+
` che funziona bene nel caso di finestra allargata un po' meno quando la finestra Ã¨ ridotta`+
`<br>`+

`0123456789012345678901234567890123456789012345678901234567890123456789`+

`<br>`+`<br>`+

` Fare attenzione quando si rinominano le variabili in quanto in use strict e file esterni si potrebbero incontare bug, quindi mantenere per compatibilitÃ  le vecchie variabili finchÃ© non si Ã¨ sicuri che tutto funzioni regolarmente.`+
` Queste variabili obsolete compaiono nel rip debugging come undefined.`+
`<br>`+

` La conversione da icone svg a font non Ã¨ perfettamente fattibile occorre perciÃ² dimensionare l'offsetbadge con il svg mentre il font Ã¨ inserito in questa specie di viewport.`+
` Una specie di hacking totale.`+
`<br>`+`<br>`+
` <b>20210714</b>==> `+
` Sistemato il fixed top del badgettino in carta occorre perÃ² notare che questo fixed funziona in absolute anche senza un relative ciÃ² forse dipende dal browser `+
` Rimane da considerare il comportamento delle proprietÃ  relative absolute in questo contesto sta di fatto che absolute si riferisce all'elemento ancestor... ma allora perchÃ¨ usare relative??? `+

`<br>`+

` Quando sono aperti pi<b>Ã¹</b> di un badge occorre segnalare questi eventi `+

`<br>`+
` <i><b>I caratteri accentati vanno restituiti al loro esatto valore unicode utilizzando uno string parser che converte in modo univoco.</b></i> `+

`<br>`+



`</div>`+``;


