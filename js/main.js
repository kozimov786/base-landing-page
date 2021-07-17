let burger = document.querySelector('.burger');
let sitenav = document.querySelector('.sitenav');
let linkDemo = document.querySelector('.site-header__demo')
let sitenavItem = document.querySelectorAll('.sitenav__item');
let sitenavLink = document.querySelectorAll('.sitenav__link');


burger.onclick = function(){
  sitenav.classList.toggle('active')
  burger.classList.toggle('is-open')
  linkDemo.classList.toggle('active')
}
