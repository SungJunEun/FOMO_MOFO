const openBtn = document.querySelector('.nav-open');
const closeBtn = document.querySelector('.nav-close');
const menu = document.querySelector('.nav-items');

openBtn.addEventListener('click', ()=>{
  menu.classList.add('menu-open');
});

closeBtn.addEventListener('click', ()=>{
  menu.classList.remove('menu-open');
});
