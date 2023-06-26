const subs = document.querySelectorAll('.header-link__wrapper');
const burgerBtn = document.querySelector('#burger-btn');
const subscription = document.querySelector('.header__subscription');
const arrows = document.querySelector('.header__arrow');
const bodyWidth = document.body.clientWidth;
const howItWorksIMG = document.querySelectorAll('.how-it-works__img');
const burgerMenu = document.querySelector('.header-burger__wrapper');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const burgerMenuSubs = document.querySelector('.header-burger__subs')
const burgerBtns = document.querySelector('.header-burger__btns');
const burgerMessengers = document.querySelector('.header-burger__messenger');
const header = document.querySelector('.header');
const logoWrapper = document.querySelector('.header-logo__wrapper');
const headerName = document.querySelector('.header__name');

    burgerBtn.addEventListener("click",()=>{
      setTimeout(() => {
        burgerMenu.classList.toggle('header-burger__wrapper_active');
      }, 100);
      setTimeout(() => {
        burgerMenuSubs.classList.toggle('header-burger__subs_active');
      }, 200);
      setTimeout(() => {
        burgerBtns.classList.toggle('header-burger__btns_active');
      }, 250);
      setTimeout(() => {
        burgerMessengers.classList.toggle('header-burger__messenger_active');
      }, 300);

      main.classList.toggle('main_active');
      footer.classList.toggle('footer_active');
      
      
      
      header.classList.toggle('header_active');
      logoWrapper.classList.toggle('header-logo__wrapper_active');
      headerName.classList.toggle('header__name_active');
      burgerBtn.classList.toggle('header__burger-btn_active');
      if (burgerBtn.classList.contains('header__burger-btn_active')) {
        disableScroll();
      } else {
        enableScroll();
      }
    })

    function disableScroll() {
      // Сохраняем текущую позицию прокрутки
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      // Добавляем стили для блокировки скролла
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
    }

    function enableScroll() {
      // Получаем сохраненную позицию прокрутки
      const scrollPosition = parseInt(document.body.style.top, 10) || 0;
      // Удаляем стили блокировки скролла
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      // Восстанавливаем прокрутку к сохраненной позиции
      window.scrollTo(0, -scrollPosition);
    }

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