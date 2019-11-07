window.cipher = {
    encode : (string, offSet) => { //key : value => {}
      let initialCharPosition = 0; //initial ASCII character position
      let encodeResult = ""; //ciphered string result
      if (string === "") { //conditionals to restrict encode function
        window.alert("Please write something!");
        string.focus();
          return false;
      } if (offSet === ""){
        window.alert("Please choose a number!");
        offSet.focus();
         return false;
      } else { //initializing encode function
      for (let i = 0; i < string.length; i++){
      initialCharPosition = string.charCodeAt(i);
      //obtener el codigo ASCII de la palabra inicializadora de for
      //UPPERCASE
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90 ){
        initialCharPosition = (initialCharPosition-65+(parseInt(offSet)))%26+65;
     encodeResult = encodeResult + String.fromCharCode(initialCharPosition);
     //lowercase
     } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122 ) {
          initialCharPosition = (initialCharPosition-97+(parseInt(offSet)))%26+97;
       encodeResult = encodeResult + String.fromCharCode(initialCharPosition);
    // blankspace
     } else {
       encodeResult = encodeResult + String.fromCharCode(initialCharPosition);
       //specialChar
     }
    }
   }
    return encodeResult;
  },
  decode: (string, offSet) => {
    let initialCharPosition = 0; //var para guardar el codigo correspondiente a c letra ASCII
    let decodeResult = ""; //almacena la palabra cifrada
    if (string === "") {
      window.alert("Please write something!");
      string.focus();
        return false;
    } if (offSet === ""){
      window.alert("Please choose a number!");
      offSet.focus();
       return false;
    } else {
    for (let i = 0; i < string.length; i++){
    initialCharPosition = string.charCodeAt(i);
    //obtener el codigo ASCII de la palabra inicializadora de for
    //UPPERCASE
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90 ){
        initialCharPosition = (initialCharPosition+65-parseInt((offSet))) % 26 + 65;
     decodeResult = decodeResult + String.fromCharCode(initialCharPosition);
    //lowercase
  } else if (string.charCodeAt(i) >= 95 && string.charCodeAt(i) <= 122 ) {
         initialCharPosition = (initialCharPosition-122-(parseInt(offSet)))%26+122;
      decodeResult = decodeResult + String.fromCharCode(initialCharPosition);
    //blankspace
   } else {
     decodeResult = decodeResult + String.fromCharCode(initialCharPosition);
  }
   }
  return decodeResult;
  }
  }
  }
    ;
