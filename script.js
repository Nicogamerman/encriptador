const textArea = document.querySelector(".input"); // Selecciona el elemento con clase "input"
const mensaje = document.querySelector(".mensaje"); // Selecciona el elemento con clase "mensaje"

function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value)// Se asigna el valor del elemento "textArea" a una variable y se encripta llamando a la funcion "encriptar"
  mensaje.value = textoEncriptado // Se asigna el valor encriptado a la propiedad "value" del elemento "mensaje" para mostrar el texto encriptado al usuario
  textArea.value = "";// Se limpia el valor del elemento "textArea"
  mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
  // Declaración de una matriz con las letras a convertir y su conversión
  let matrizCodigo =[["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  // Imprimir la matriz en la consola
  console.table(matrizCodigo)
  // Convertir el string a minúsculas
  stringEncriptada = stringEncriptada.toLowerCase()
  //Iterar sobre cada letra del string
  for (let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.include(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
    return stringEncriptada
  }

  function btnDesencriptar(){
    const textoEncriptado = btnDesencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
  }

  function desencriptar(stringDesencriptada){
    let matrizCodigo =  
      [["e", "enter"],
      ["i","imes"],
      ["a","ai"],
      ["o","ober"],
      ["u","ufat"]];
    console.table(matrizCodigo)
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++){
      if(stringDesencriptada.include(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
      }
    }
      return stringDesencriptada
    }
