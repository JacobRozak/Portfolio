// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const items = document.querySelectorAll('.item');
const card = document.getElementsByClassName('.card');
// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
var toggled = false
function work(){
  if(!toggled){
    toggled = true;
    document.getElementById('card').style.display = 'none';
    return
  }
  if(toggled){
    toggled = false;
    document.getElementById('card').style.display = 'block'
    return
  }
}

function work1(){
  if(!toggled){
    toggled = true;
    document.getElementById('card1').style.display = 'none';
    return
  }
  if(toggled){
    toggled = false;
    document.getElementById('card1').style.display = 'block'
    return
  }
}
function work2(){
  if(!toggled){
    toggled = true;
    document.getElementById('card2').style.display = 'none';
    return
  }
  if(toggled){
    toggled = false;
    document.getElementById('card2').style.display = 'block'
    return
  }
}
function work3(){
  if(!toggled){
    toggled = true;
    document.getElementById('card3').style.display = 'none';
    return
  }
  if(toggled){
    toggled = false;
    document.getElementById('card3').style.display = 'block'
    return
  }
}
function work4(){
  if(!toggled){
    toggled = true;
    document.getElementById('card4').style.display = 'none';
    return
  }
  if(toggled){
    toggled = false;
    document.getElementById('card4').style.display = 'block'
    return
  }
}
