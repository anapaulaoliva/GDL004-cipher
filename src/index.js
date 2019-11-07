//function to modal button window
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () =>{
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
overlay.addEventListener('click', () =>{
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});
closeModalButtons.forEach(button => {
  button.addEventListener('click', () =>{
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal){
  if (modal == null) return; //MAYBE IT WONT WORK WITH THIS ;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal){
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
//DOM to JS
document.getElementById("encodeBtn").addEventListener("click", function(){
  let string = document.getElementById("string").value;
  let offSet = document.getElementById("offSet").value;
  let encodeResult = window.cipher.encode(string, offSet);
  let outputBox = document.getElementById("outputBox");
  let inputBox = document.getElementById("inputBox");

  inputBox.style.display="none";
  outputBox.style.display="block";
  document.getElementById("outputResult").innerHTML =  encodeResult;

});

document.getElementById("decodeBtn").addEventListener("click", function(){
  let string = document.getElementById("string").value;
  let offSet = document.getElementById("offSet").value;
  let decodeResult = window.cipher.decode(string, offSet);
  let outputBox = document.getElementById("outputBox");
  let inputBox = document.getElementById("inputBox");

  inputBox.style.display="none";
  outputBox.style.display="block";
  document.getElementById("outputResult").innerHTML = "Your message is:" + "<br>" + decodeResult;
});
