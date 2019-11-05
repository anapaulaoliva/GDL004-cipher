//function to modal button window
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () =>{
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})
overlay.addEventListener('click', () =>{
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})
closeModalButtons.forEach(button => {
  button.addEventListener('click', () =>{
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal){
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal){
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
//funcion to UPPER CASE STRING INPUT
function toUpperCase() {
  let stringUpperCase = document.getElementById("string");
  stringUpperCase.value = stringUpperCase.value.toUpperCase();
}
//DOM to JS
document.getElementById("encodeBtn").addEventListener("click", function(){
  let string = document.getElementById("string").value;
  let offSet = document.getElementById("offSet").value;
  let encodeResult = window.cipher.encode(string, offSet);

  document.getElementById("outputText").innerHTML = "Values are: "  + string + " and: " + offSet;
  document.getElementById("outputResult").innerHTML = "Mensaje cifrado es: " + encodeResult;
});

document.getElementById("decodeBtn").addEventListener("click", function(){
  let string = document.getElementById("string").value;
  let offSet = document.getElementById("offSet").value;
  let decodeResult = window.cipher.decode(string, offSet);

  document.getElementById("outputText").innerHTML = "Values are: " + string + " and: " + offSet;
  document.getElementById("outputResult").innerHTML = "Mensaje descifrado es: " + decodeResult;
})
