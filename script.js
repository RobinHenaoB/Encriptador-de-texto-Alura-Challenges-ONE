const inputText = document.querySelector(".input-padron");
const outputText = document.querySelector(".output-padron");
const hide=document.querySelector(".div-hide");
const visible=document.querySelector(".div-btn-copy");

//orden matriz
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    hide.style.display="none";
    outputText.style.display="flex";
    visible.style.display="flex";
    const text=encriptar(inputText.value);
    outputText.value=text;
    inputText.value="";
}

function btnDesencriptar(){
    hide.style.display="none";
    outputText.style.display="flex";
    visible.style.display="flex";
    const text=desencriptar(inputText.value);
    outputText.value=text;
    inputText.value="";
}

function btnCopy(){
    outputText.select();
    outputText.setSelectionRange(0,99999);
    document.execCommand('copy');
}

function encriptar(stringEncrip){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncrip=stringEncrip.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncrip.includes(matrizCodigo[i][0])) {
            stringEncrip=stringEncrip.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
        
    }
    return stringEncrip
}

function desencriptar(stringDesencrip){
    let matrizCode=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencrip=stringDesencrip.toLowerCase();

    for (let i = 0; i < matrizCode.length; i++) {
        if (stringDesencrip.includes(matrizCode[i][1])) {
            stringDesencrip=stringDesencrip.replaceAll(matrizCode[i][1],matrizCode[i][0]);
        }
        
    }
    return stringDesencrip
}

