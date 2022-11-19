const selectors = {
    openMenu: '.header__open-menu',
    headerMenu: '.header__menu',
    slider: '.slider',
    btnNext: '.btnNext',
    btnPrev: '.btnPrev'
}
//openMenu
const openMenu = document.querySelector(selectors.openMenu);
const headerMenu = document.querySelector(selectors.headerMenu);
//openMenu 
openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('active')
    headerMenu.classList.toggle('active')
});
//

// slider
const slider = document.querySelector(selectors.slider);
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector(selectors.btnNext);
const btnPrev = document.querySelector(selectors.btnPrev);

sliderItems.forEach(function (slide, index) {
  // чтобы только 1 слайд показывал 
  if (index !==0) slide.classList.add('hidden'); // у hidden display: none; прописан
  
  // Добавляем индексы для слайдов
  slide.dataset.index = index;

  // Добавляем data атрибут active для первого / активного слайда
  sliderItems[0].setAttribute('data-active', '')

  // клик по картинке и тд.
   /*
  slide.addEventListener('click', function () {
    showNextSlide('next');
  });
  */
});

// btn Next
btnNext.onclick = function () {
  showNextSlide('next');
}

// btn Prev
btnPrev.onclick = function () {
  showNextSlide('prev');
}

function showNextSlide(direction) {
  // скрываем тек. слайд
  const currentSlide = slider.querySelector('[data-active]');
  const currentSlideIndex = +currentSlide.dataset.index;
  
  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');

  // расчитываем след. индекс в зависимости от направления движ.
  let nextSlideIndex;   
  if (direction === 'next') {
    nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  }
  else if (direction === 'prev') {
    nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  }
  // Показываем след. слайд
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');
};
