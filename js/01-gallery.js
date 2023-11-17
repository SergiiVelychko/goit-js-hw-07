import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </li>`;
};

const renderGallery = (items) => {
  const galleryMarkup = items.map(createGalleryItem).join("");
  galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
};

renderGallery(galleryItems);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  const targetImage = event.target;
  if (targetImage.classList.contains("gallery__image")) {
    const largeImageURL = targetImage.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" width="800" height="600">
    `);

    instance.show();
  }
});
