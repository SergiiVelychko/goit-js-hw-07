import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


import { galleryItems } from './gallery-items.js';
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

// Получаем ссылку на элемент ul.gallery
const galleryContainer = document.querySelector('.gallery');

// Создаем разметку галереи
const galleryMarkup = createGalleryMarkup(galleryItems);

// Рендерим разметку внутрь ul.gallery
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Добавляем слушатель события клика на ul.gallery
galleryContainer.addEventListener('click', onGalleryItemClick);

// Функция создания разметки галереи
function createGalleryMarkup(items) {
    return items
      .map(({ preview, original, description }) => {
        return `
          <li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </li>
        `;
      })
      .join('');
  }
  
  // Функция обработки клика по элементу галереи
  function onGalleryItemClick(event) {
    event.preventDefault();
  
    // Проверяем, что клик произошел именно на изображении
    const isImageElement = event.target.classList.contains('gallery__image');
  
    if (!isImageElement) {
      return;
    }
  
    // Получаем значение атрибута data-source изображения
    const largeImageUrl = event.target.dataset.source;
  
    // Создаем экземпляр модального окна с изображением
    const instance = basicLightbox.create(`
      <img src="${largeImageUrl}" width="800" height="600">
  `);
  
    // Открываем модальное окно
    instance.show();
  
    // Добавляем слушатель события закрытия модального окна по клавише Escape
    window.addEventListener('keydown', onKeyPress);
  
    // Функция закрытия модального окна по клавише Escape
    function onKeyPress(event) {
      if (event.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', onKeyPress);
      }
    }
  }
 
  
  
  
  
  