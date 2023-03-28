/*
encode codifica un texto y lo devuelve
*/
function encode(offsetCifrar, textCifrar) {
  if (typeof textCifrar !== 'string') {
    // Si no es un string
    throw TypeError('El texto debe ser un string.')
  }

  if (textCifrar.trim().length === 0) {
    // Si es una cadena vacía o solo contiene espacios en blanco
    throw TypeError('Debe ingresar un texto válido.')
  }
  if (offsetCifrar < 0 || offsetCifrar % 1 > 0) {
    // Si el numero no es valido, entero y negativo
    throw TypeError('debe ingresar un numero valido ')
  }
  let resultEncode = ''
  for (let i = 0; i < textCifrar.length; i += 1) {
    const codigoAsciiC = textCifrar[i].charCodeAt()
    if (typeof codigoAsciiC < 65 && codigoAsciiC > 90) {
      // Si el código ASCII no corresponde a una letra mayúscula
      throw new TypeError('Debe ingresar solo letras mayúsculas.')
    }
    const codigoCifrado = (((codigoAsciiC - 65 + parseInt(offsetCifrar, 10)) % 26) + 65)
    const caracterCifrado = String.fromCharCode(codigoCifrado)
    resultEncode += caracterCifrado
  }
  return resultEncode
}

function decode(offsetDescifrar, textDescifrar) {
  if (typeof textDescifrar !== 'string') {
    // Si no es un string
    throw TypeError('El texto debe ser un string')
  } 
  if (textDescifrar.trim().length === 0) {
    // Si es una cadena vacía o solo contiene espacios en blanco
    throw TypeError('Debe ingresar un texto válido.')
  }
  if (offsetDescifrar < 0 || offsetDescifrar % 1 > 0) {
    // Si el numero no es valido, entero y negativo
    throw TypeError('debe ingresar un numero valido')
  }
  let resultDecode = ''
  for (let i = 0; i < textDescifrar.length; i += 1) {
    const codigoAscii = textDescifrar[i].charCodeAt()
    if (typeof codigoAscii >= 65 && codigoAscii <= 90) {
      // Si el código ASCII no corresponde a una letra mayúscula
      throw TypeError('Debe ingresar solo letras mayúsculas.')
    }

    let codigoDescifrado = ((codigoAscii - 65 - parseInt(offsetDescifrar, 10)) % 26)
    if (codigoDescifrado < 0) {
      codigoDescifrado += 26
    }
    codigoDescifrado += 65

    const caracterDescifrado = String.fromCharCode(codigoDescifrado)
    resultDecode += caracterDescifrado
  }
  return resultDecode
}
const cipher = { encode, decode }

export default cipher
