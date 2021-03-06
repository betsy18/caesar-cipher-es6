$(document).ready(() => {
  // eventos
  $('#btnCipher').on('click', () => {
    let text = $('#text').val();
    // si el texto es diferente de 0, o si ingresa algun valor númerico lo reemplaza por vacio
    if (text !== '' && text.replace(/[^0-9]/g, ' ') !== text) { 
      // llamamos a la funcion a ejecutar
      cipher(text); 
      $('#text').val('');
      // $('.container-tex > p').val('');
    } else {
      alert('Error vuelva a ingresar el texto'); 
    }  
  });

  $('#btnDecipher').on('click', () => {
    let text = $('#text').val();
    // si el texto es diferente de 0, o si ingresa algun valor númerico lo reemplaza por vacio
    if (text !== '' && text.replace(/[^0-9]/g, ' ') !== text) { 
      // llamamos a la funcion a ejecutar
      decipher(text); 
      $('#text').val('');
      // $('.container-tex > p').val('');
    } else {
      alert('Error vuelva a ingresar el texto'); 
    }
  });
 
  // función para las letras mayúsculas
  const capitalLetter = (text) => text === text.toUpperCase();

  // función para las letras minúsculas
  const lowerCase = (text) => text === text.toLowerCase();

  // funcion para limpiar las cajas de texto
  const clean = (text) => text.val('');
  // función cifrado
  const cipher = (text) => {
    let textCipher = '';
    let textChar = '';
    for (let i = 0; i < text.length; i++) {
      if (capitalLetter(text)) {
        textChar = (text.charCodeAt(i) - 65 + 33) % 26 + 65;
      }
      if (lowerCase(text)) {
        textChar = (text.charCodeAt(i) - 97 + 33) % 26 + 65;
      }
      // convirtiendo el texto en cifrado en cod ASCII
      textCipher += String.fromCharCode(textChar);
      console.log(textCipher);
    }
    return $('.container-text').append('<p>' + textCipher + '</p>');
  };
  // console.log(cipher('hola'));

  const decipher = (text) => {
    // para guardar las letras de la letra a descifrar
    let textDecipher = '';
    let textChar = '';
    for (var i = 0; i < text.length; i++) {
      if (capitalLetter(text)) {
        // se le suma el -7 a las mayus y min  y luego se le 
        // agrega el + 52 que representa las dos vueltas al abc
        textChar = (text.charCodeAt(i) - 20) % 26 + 65;
      } 
      if (lowerCase(text)) {
        textChar = (text.charCodeAt(i) - 52) % 26 + 97;
      }
      // convirtiendo el texto en cifrado en cod ASCII
      textDecipher += String.fromCharCode(textChar);
      console.log(textDecipher);
    }
    return $('.container-text').append('<p">' + textDecipher + '</p>');
  };
  // console.log(decipher('ovsh'));
});

