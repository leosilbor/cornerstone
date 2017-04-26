// Get the modal
var subMenu = document.getElementById('navPages-20');

// Get the button that opens the modal
var menu = document.getElementById('navPages');

// When the user clicks on the button, open the modal 
menu.onclick = function() {
  subMenu.classList.toggle('is-open');
}

// Get the modal
var divPesquisa = document.getElementById('quickSearch');

// Get the button that opens the modal
var btnPesquisa = document.getElementById('btnQuickSearch');

// When the user clicks on the button, open the modal 
btnPesquisa.onclick = function() {
  divPesquisa.classList.toggle('is-open');
  divPesquisa.classList.toggle('f-open-dropdown');
}



// Get the modal
var divMenu = document.getElementById('menu');

// Get the button that opens the modal
var linkMenu = document.getElementById('linkMenu');

// When the user clicks on the button, open the modal 
linkMenu.onclick = function() {
  linkMenu.classList.toggle('is-open');
  linkMenu.parentElement.classList.toggle('is-open');
  divMenu.classList.toggle('is-open');
}

// Get the modal
var divCart = document.getElementById('cart-preview-dropdown');

// Get the button that opens the modal
var linkCart = document.getElementById('linkCart');

// When the user clicks on the button, open the modal 
linkCart.onclick = function() {
  divCart.classList.toggle('is-open');
  divCart.classList.toggle('f-open-dropdown');
  linkCart.parentElement.classList.toggle('is-open');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target !== menu) {
    subMenu.classList.remove('is-open');
  } 
  if (event.target !== linkCart) {
    divCart.classList.remove('is-open');
    divCart.classList.remove('f-open-dropdown');
    linkCart.parentElement.classList.remove('is-open');
  }   
}