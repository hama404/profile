// mobile compatible
const body = document.querySelector('body');
body.setAttribute('ontouchstart','');

// smooth scroll
const trrigers = document.querySelectorAll('a[href^="#"]');
trrigers.forEach((trigger)=>{
  let href = trigger.getAttribute('href').replace('#', '');
  let targetElement = document.getElementById(href);
  // add event
  trigger.addEventListener('click', (e)=>{
    e.preventDefault();
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
})

// visible element animation
const profileHeading = document.querySelector('.profile .heading h2');
const skillsHeading = document.querySelector('.skills .heading h2');
const worksHeading = document.querySelector('.works .heading h2');
const profilePosition = profileHeading.offsetTop - (window.innerHeight / 2);
const skillsPosition = skillsHeading.offsetTop - (window.innerHeight / 2);
const worksPosition = worksHeading.offsetTop - (window.innerHeight / 2);

// add event
window.addEventListener('scroll', ()=>{
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  if (scroll > worksPosition) {
    worksHeading.classList.add('show')
  } else if (scroll > skillsPosition) {
    skillsHeading.classList.add('show')
  } else if (scroll > profilePosition) {
    profileHeading.classList.add('show')
  }
})

// loading animation
window.onload = function(){
}
