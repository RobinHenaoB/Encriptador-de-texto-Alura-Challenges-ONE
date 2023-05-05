const inputText = document.querySelector(".input-padron");//textarea de ingreso de texto
const outputText = document.querySelector(".output-padron");//textarea de ingreso de texto
const hide = document.querySelector(".div-hide");//class div donde estan  la imagen y el texto de Ningún mensaje fue encontrado
const visible = document.querySelector(".div-btn-copy");//class  div donde esta el botton copy

//funcion para boton de encriptar
function btnEncriptar() {
    const text = encriptar(inputText.value);
    if (text.length > 0) {
        visibleItems(true);
        outputText.value = text;
        inputText.value = "";
    }
    else{
        visibleItems(false);
    }
}

//funcion para boton de desencriptar
function btnDesencriptar() {
    const text = desencriptar(inputText.value);
    if (text.length > 0) {
        visibleItems(true);
        outputText.value = text;
        inputText.value = "";
    }
    else{
        visibleItems(false);
    }
}

//funcion para el boton de copiar
function btnCopy() {
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function encriptar(stringEncrip) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrip = stringEncrip.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncrip.includes(matrizCodigo[i][0])) {
            stringEncrip = stringEncrip.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringEncrip;
}

function desencriptar(stringDesencrip) {
    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencrip = stringDesencrip.toLowerCase();

    for (let i = 0; i < matrizCode.length; i++) {
        if (stringDesencrip.includes(matrizCode[i][1])) {
            stringDesencrip = stringDesencrip.replaceAll(matrizCode[i][1], matrizCode[i][0]);
        }

    }
    return stringDesencrip;
}

//funcion para intercalar entre el textare  y la imagen con texto con un parametro  booleano
function visibleItems(onItem) {
    if (onItem) {
        hide.style.display = "none";
        outputText.style.display = "flex";
        visible.style.display = "flex";
    } else {
        hide.style.display = "";
        outputText.style.display = "none";
        visible.style.display = "none";
    }
}


