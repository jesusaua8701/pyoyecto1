function encriptar(){
 
    var texto=document.getElementById("text-input").value.toLowerCase();

    var txtCifrado=texto.replace(/e/igm,"enter");
    var txtCifrado=txtCifrado.replace(/o/igm,"ober");
    var txtCifrado=txtCifrado.replace(/i/igm,"imes");
    var txtCifrado=txtCifrado.replace(/a/igm,"ai");
    var txtCifrado=txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagenDerecha").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML= txtCifrado;
    document.getElementById("copy").style.display="show"
    document.getElementById("copy").style.display="inherit"
}

function desencriptar(){
 
    var texto=document.getElementById("text-input").value.toLowerCase();

    var txtCifrado=texto.replace(/enter/igm,"e");
    var txtCifrado=txtCifrado.replace(/ober/igm,"o");
    var txtCifrado=txtCifrado.replace(/imes/igm,"i");
    var txtCifrado=txtCifrado.replace(/ai/igm,"a");
    var txtCifrado=txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imagenDerecha").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML= txtCifrado;
    document.getElementById("copy").style.display="show"
    document.getElementById("copy").style.display="inherit"
    
}
function copyToClipBoard() {

    var content = document.getElementById('texto2');
    
    content.select();
    document.execCommand('copy');

}