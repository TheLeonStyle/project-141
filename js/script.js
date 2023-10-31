// Функция для обработки клика на кнопку "Вверх"
const activeImage = document.querySelector('.slider__image-active');
const items = document.querySelector('.slider__items');
const imageSrcArray = [
  './images/44977-1.jpg',
  './images/44977-2.jpg',
  './images/44977-3.jpg',
  './images/44977-4.jpg',
  './images/44977-5.jpg',
  './images/44977-6.jpg',
  './images/44977-7.jpg',
  './images/44977-8.jpg',
  './images/44977-9.jpg',
  './images/44977-10.jpg',
];

const itemsPerPage = 4; // Количество блоков на странице
let currentPage = 0; // Текущая страница

// Рендеринг побочных изображений
function render(src, index) {
  const item = `
    <div class="slider__item ${index === 0 ? 'active' : ''} slider__image slider__image-small">
      <img src="${src}" alt="Побочное изображение">
    </div>`;
  items.insertAdjacentHTML('beforeend', item);
}

// Функция для обработки клика на кнопку "Вверх"
function handleUpClick() {
  if (currentPage > 0) {
    currentPage--;
    renderPage(currentPage);
    animateImageSmall();
  }
}

// Функция для обработки клика на кнопку "Вниз"
function handleDownClick() {
  const maxPage = Math.ceil(imageSrcArray.length / itemsPerPage);
  if (currentPage < maxPage - 1) {
    currentPage++;
    renderPage(currentPage);
    animateImageSmall();
  }
}

// Функция для анимации .slider__image-small
function animateImageSmall() {
  const imageSmalls = document.querySelectorAll('.slider__image-small');
  imageSmalls.forEach((imageSmall, index) => {
    if (index === currentPage * itemsPerPage) {
      imageSmall.classList.add('active');
    } else {
      imageSmall.classList.remove('active');
    }
  });
}

// Функция для рендеринга страницы
function renderPage(page) {
  items.innerHTML = '';
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageSrcArray = imageSrcArray.slice(startIndex, endIndex);

  pageSrcArray.forEach((src, index) => {
    render(src, index);
  });

  const imageSmalls = document.querySelectorAll('.slider__image-small');
  imageSmalls.forEach((imageSmall, index) => {
    imageSmall.addEventListener('click', () => {
      imageSmalls.forEach((element) => {
        element.classList.remove('active');
      });
      imageSmall.classList.add('active');
      activeImage.innerHTML = `<img src="${pageSrcArray[index]}" alt="Активное изображение">`;
    });
  });
}

// Инициализация страницы
renderPage(currentPage);

// Добавление обработчиков для кнопок "Вверх" и "Вниз"
document.querySelector('.slider__button-up').addEventListener('click', handleUpClick);
document.querySelector('.slider__button-down').addEventListener('click', handleDownClick);

const body = document.querySelector('body');

body.insertAdjacentHTML(
  'afterBegin',
  `<div class="author">
<a href="https://github.com/TheLeonStyle" class="">https://github.com/TheLeonStyle</a>
</div>`,
);
