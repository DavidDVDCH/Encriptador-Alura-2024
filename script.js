const textarea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensajeRecibido")
//

//Las "llaves" de encriptación que utilizaremos son las siguientes:

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"

}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["o","ober"],["a","ai"],["u","ufat"],["i","imes"]]
    stringEncriptada = stringEncriptada.toLowerCase()
   
    

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada

}

//Desencriptar tomanado el contenido del textorecibido


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
}

// Activando el boton copiar 

function btnCopiarMensaje(){

    const inputText = document.querySelector(".mensajeRecibido");
    inputText.select();
    navigator.clipboard.writeText(mensaje.value);
    alert("Se copió el texto: " + mensaje.value);
    mensaje.value = "";
}



function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada
}


// 1. para ver si el arreglo fue correcto en la pag y en forma de tabla:    console.table(matrizCodigo)
//2. creamos la funcion de encriptar con el tipo de datos string y colocamos dentro la variable let matrizCodigo. La funcion encriptar require recibir un parametro para recibir las letras y se realiza la encriptacion. Devolvera el resultado de la funcion.

//3. El parametro es stringEncriptada. Se estara recibiendo asi mismo,pero en minusculas. De acuerdo a las caracteristicas del mensaje a encriptar. 

//4. Para realizar el recorrido de la matriz se utilizara el bucle for, con tres parametros (que empiece del elemento 0 como i = 0, recorra cada elemento antes de toda la longitud de la matriz como i < matrizCodigo.length y que lea vaya agregando cada elemento como i++.

//5. Crear una condicion (if) dentro del bucle for, para verificar las letras que se estan ingresando en el array. Las condiciones son: stringEncriptada, verificacion de las letras que estan siendo ingresadas y estan dentro de este array, usando includes, luego pasar los parametros es decir la llave que sera verificada que sera matrizCodigo y agregar el indice y la posicion que sera i y la posicion 0.  

//6. Hacer la sustitucion de las letras. Utilizando el metodo replace, que va cambiando una cadena de caracteres por otros. Requiere los parametros que seran la llave que sera sustituida por los nuevos valores. 

//7. Retornamos la cadena con return. 

//8. Para llamar la funcion de encriptar se requiere activar el boton encriptar. Se le pasara a la funcion la constante texoEncriptado y este recibe la funcion encriptrar con el parametro del valor del textArea. Luego mostarlo en el campo de mensaje encriptado.  

//9. Crear el evento en el index en el boton de encriptar. 

//10. Limpiar el texarea y quitar imagen al hacer click en el boton encriptar.

//11. crear la funcion desencriptar usando los parametros de la funcion encriptar, pero con la matriz al reves.