
window.cipher = {
  encode (string, offSet) {
    let initialCharPosition = 0; //var para guardar el codigo correspondiente a c letra ASCII
    let offsetCharPosition = 0;
    let encodeResult = ""; //almacena la palabra cifrada

    for (let i = 0; i < string.length; i++){

    initialCharPosition = string.charCodeAt(i);
    //obtener el codigo ASCII de la palabra inicializadora de for
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90 ){
        initialCharPosition = (initialCharPosition)-65+(offSet)%26+65;
     encodeResult = encodeResult + String.fromCharCode(initialCharPosition);
   }
 }
  return encodeResult;
},
decode (string, offSet) {
  let initialCharPosition = 0; //var para guardar el codigo correspondiente a c letra ASCII
  let offsetCharPosition = 0;
  let decodeResult = ""; //almacena la palabra cifrada

  for (let i = 0; i < string.length; i++){

  initialCharPosition = string.charCodeAt(i);
  //obtener el codigo ASCII de la palabra inicializadora de for
  if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90 ){
      initialCharPosition = (initialCharPosition)-65-(offSet)%26+65;
   decodeResult = decodeResult + String.fromCharCode(initialCharPosition);
 }
}
return decodeResult;
}

}
