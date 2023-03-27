import cipher from './cipher.js'

// variables para paracer o desaparecer los div
const botonCifrar = document.getElementById('botonCifrar')
const botonDescifrar = document.getElementById('botonDescifrar')

// funcion para mostar u ocultar los div
function mostrarOpcion1() {
  document.getElementById('cifrado').style.display = 'block'

  document.getElementById('descifrado').style.display = 'none'
}

botonCifrar.addEventListener('click', mostrarOpcion1)

function mostrarOpcion2() {
  document.getElementById('descifrado').style.display = 'block'
  document.getElementById('cifrado').style.display = 'none'
}
botonDescifrar.addEventListener('click', mostrarOpcion2)

/* ----------------------------- CIFRAR ----------------------------------- */
// variable del boton para cifrar
const enviarCifrado = document.getElementById('enviarCifrado')

function valoresCifrado() {
  const textCifrar = document.getElementById('textCifrar').value
  const offsetCifrar = document.getElementById('offsetCifrar').value

  // textCifrar = textCifrar.toUpperCase();
  // resultado
  const resultEncode = cipher.encode(offsetCifrar, textCifrar)
  const mensajeCifrado = document.getElementById('pCifrado')
  mensajeCifrado.innerHTML = `El texto cifrado es ${resultEncode}`
}
enviarCifrado.addEventListener('click', valoresCifrado)

/* ------------------------------ FIN ------------------------------------ */

/* ----------------------------- DESCIFRAR ----------------------------------- */

// variable del boton para descifrar
const enviarDescifrado = document.getElementById('enviarDescifrado')

function valoresDescifrado() {
  const textDescifrar = document.getElementById('textDescifrar').value
  const offsetDescifrar = document.getElementById('offsetDescifrar').value

  // textDescifrar = textDescifrar.toUpperCase();
  // resultado
  const resultDecode = cipher.decode(offsetDescifrar, textDescifrar)
  const mensajeDescifrado = document.getElementById('pDescifrado')
  mensajeDescifrado.innerHTML = `El texto cifrado es ${resultDecode}`
}
enviarDescifrado.addEventListener('click', valoresDescifrado)

/* -------------------------------- FIN -------------------------------------- */
