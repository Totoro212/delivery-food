const cart_btn = document.querySelector('.cart-button')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
cart_btn.addEventListener('click', function(e){
  modal.classList.add('is-open');
})
close.addEventListener('click', function(e){
  modal.classList.remove('is-open');
})