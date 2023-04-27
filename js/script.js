let swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

new Accordion('.questions_list', {
  elementClass: "questions__item",
  triggerClass: "question__link",
  panelClass: "question__content",
  activeClass: "question--active",
});

let step = document.querySelectorAll('.step__list-btn');
let item = document.querySelectorAll('.consult__box');

step.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    step.forEach(function(btn){ btn.classList.remove('step__list-btn--active')});
    e.currentTarget.classList.add('step__list-btn--active');

    item.forEach(function(element){ element.classList.remove('consult__box--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('consult__box--active');
  });
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let cross = document.querySelector('.cross')

burger.addEventListener('click',
function() {

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');
    })
})

cross.addEventListener('click',
function() {
    menu.classList.toggle('header__nav--active');

})


let search = document.querySelector('.search');
let searchLine = document.querySelector('.search-stroke');
let close = document.querySelector('.close-line');

search.addEventListener('click',
function() {

  searchLine.classList.toggle('search-stroke--active');

  document.body.classList.toggle('stop-scroll');
})

close.addEventListener('click',
function() {
    searchLine.classList.toggle('search-stroke--active');

})

