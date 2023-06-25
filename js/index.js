const subs = document.querySelectorAll('.header-link__wrapper');
const burgerBtn = document.querySelector('#burger-btn');
const subscription = document.querySelector('.header__subscription');
const arrows = document.querySelector('.header__arrow');
const bodyWidth = document.body.clientWidth;
const howItWorksIMG = document.querySelectorAll('.how-it-works__img');

if(bodyWidth > 1023){
    subs.forEach(e => {
        const dropDownBlock = e.querySelector('.header__drop-down');
        const arrow = e.querySelector('.header__arrow');
        const dropDownCheck = e.querySelector('.dropDownCheck');
        let isRotated = true;
    
        e.addEventListener('click', () => {
            dropDownBlock.classList.toggle("header__drop-down_active");
            arrow.classList.toggle('header__arrow_active');
            isRotated = !isRotated;
        })
        document.addEventListener('click', function (sub) {
            if (sub.target.id != dropDownCheck.id && !isRotated) {
                dropDownBlock.classList.add('header__drop-down_active');
                arrow.classList.toggle("header__arrow_active");
                isRotated = !isRotated;
            }
        });
    });
}



function changeLinks() {
    const bodyWidth = document.body.clientWidth;

    if (bodyWidth <= 1023) {
        if (arrows) {
            const parentElement = arrows.parentNode;
            parentElement.removeChild(arrows);
          }
    } 
}
changeLinks();

window.addEventListener('resize', function () {
    
    changeLinks();
    
});


// Проверяем, что блок существует
