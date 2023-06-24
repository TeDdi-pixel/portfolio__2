const subs = document.querySelectorAll('.header-link__wrapper');
const subsBlock = document.querySelector('.header-subscriptions__wrapper');
const subsLink = document.querySelector('#subs');
const subLink = document.querySelector('.header-subscriptions__link');
const arrow = document.querySelectorAll('.header__arrow');
const langBlock = document.querySelector('.header-language__wrapper');
let isRotated = false;


subs[0].addEventListener('click',()=>{
    subsBlock.classList.toggle('header-subscriptions__wrapper_active');
    arrow[0].classList.toggle("header__arrow_active");
    isRotated = false; 
})

subs[1].addEventListener('click',()=>{
    langBlock.classList.toggle('header-language__wrapper_active');
    arrow[1].classList.toggle("header__arrow_active");
    isRotated = false; 
    
})


document.addEventListener('click', function(e) {
    
    if (e.target.id != 'lang' && !isRotated) {
        langBlock.classList.add('header-language__wrapper_active');
        arrow[1].classList.toggle("header__arrow_active");
        isRotated = true;
    }
  });


document.addEventListener('click', function(e) {
    if (e.target.id != 'subs' && !isRotated) {
        subsBlock.classList.add('header-subscriptions__wrapper_active');
        arrow[0].classList.toggle("header__arrow_active");
        isRotated = true;
        
    }
  });

// if(subsLink.classList.contains('header__subscription_active')){
//     subsLink.style.color = "#333";
// }else{
//     subLink.addEventListener('mouseenter', ()=>{
//         subLink.style.color = 'var(--blue, #1749B3)';
//     })
//     subLink.addEventListener('mouseover', ()=>{
//         subLink.style.color = 'var(--black-2,#171717)';
//     })
// }




