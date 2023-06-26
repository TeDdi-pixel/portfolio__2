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
// const FAQItems = document.querySelectorAll('.FAQ__item');

// FAQItems.forEach(item => {
//   const questionWrapper = item.querySelector('.FAQ-question__wrapper');
//   const answer = item.querySelector('.FAQ__answer');
//   const arrow = item.querySelector('.FAQ__arrow');
//   let isExpanded = false;
//     console.log(questionWrapper);
//     arrow.addEventListener('click', () => {
//     isExpanded = !isExpanded;
//     answer.style.maxHeight = isExpanded ? `${answer.scrollHeight}px` : '0';
//     answer.style.opacity = isExpanded ? 1 : 0;
//     answer.style.height = isExpanded ? 'auto' : '0';
//     arrow.classList.toggle('arrow-rotate');
//   });
// });

const FAQItems = document.querySelectorAll('.FAQ__item');
let currentExpandedItem = null;

FAQItems.forEach(item => {
//   const questionWrapper = item.querySelector('.FAQ-question__wrapper');
  const answer = item.querySelector('.FAQ__answer');
  const arrow = item.querySelector('.FAQ__arrow');
  let isExpanded = false;

  item.addEventListener('click', () => {
    if (currentExpandedItem !== item) {
      // Закрити попередній відкритий блок
      if (currentExpandedItem) {
        const prevAnswer = currentExpandedItem.querySelector('.FAQ__answer');
        prevAnswer.style.maxHeight = `${prevAnswer.scrollHeight}px`;
        prevAnswer.style.height = `${prevAnswer.scrollHeight}px`;
        prevAnswer.classList.add('collapsing');
        setTimeout(() => {
          prevAnswer.style.maxHeight = '0';
          prevAnswer.style.height = '0';
          setTimeout(() => {
            prevAnswer.classList.remove('collapsing');
          }, 300);
        }, 50);
        const prevArrow = currentExpandedItem.querySelector('.FAQ__arrow');
        prevArrow.classList.remove('arrow-rotate');
        currentExpandedItem = null;
      }

      // Відкрити поточний блок
      isExpanded = true;
      answer.style.maxHeight = `${answer.scrollHeight}px`;
      answer.style.height = 'auto';
      answer.classList.add('collapsing');
      setTimeout(() => {
        answer.classList.remove('collapsing');
      }, 300);
      arrow.classList.add('arrow-rotate');
      currentExpandedItem = item;
    } else {
      // Закрити поточний блок
      isExpanded = false;
      answer.style.maxHeight = `${answer.scrollHeight}px`;
      answer.style.height = `${answer.scrollHeight}px`;
      setTimeout(() => {
        answer.style.maxHeight = '0';
        answer.style.height = '0';
        answer.classList.add('collapsing');
        setTimeout(() => {
          answer.classList.remove('collapsing');
        }, 300);
      }, 50);
      arrow.classList.remove('arrow-rotate');
      currentExpandedItem = null;
    }
  });
});