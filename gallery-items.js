const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

//Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryContainerEl = document.querySelector("ul.js-gallery");
const cardsMarkup = createImagesCardsMarkup(images);
galleryContainerEl.insertAdjacentHTML('beforeend', cardsMarkup);
//ыconsole.log(cardsMarkup);

function createImagesCardsMarkup (images) {
  return images.map(({preview, original, description}) => {
    return  `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
       >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
  }).join('');

  console.log(markup);
}

//Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

galleryContainerEl.addEventListener('click', onImageClick);
//console.log(galleryContainerEl);

//Открытие модального окна по клику на элементе галереи.
//Подмена значения атрибута src элемента img.lightbox__image.

const modalContainerEl = document.querySelector('.js-lightbox');
const imageInModalEl = document.querySelector('.lightbox__image');

function onImageClick (event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG'){
    return;
  }
  
  modalContainerEl.classList.add('is-open');
  imageInModalEl.src = event.target.dataset.source;
  console.log(imageInModalEl.src);
}

//Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
//Очистка значения атрибута src элемента img.lightbox__image. 

modalContainerEl.addEventListener('click', onCloseModalBtn)

function onCloseModalBtn(event){
  event.preventDefault();
  const modalCloseBtn = document.querySelector('button[data-action="close-lightbox"]');

  if(event.target === modalCloseBtn){
  modalContainerEl.classList.remove('is-open');
  imageInModalEl.src = ' ';
  }
}
