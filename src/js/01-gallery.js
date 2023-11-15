import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = preview;
  galleryImage.alt = description;
  galleryImage.setAttribute("data-source", original);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
};

const renderGallery = (items) => {
  const galleryMarkup = items.map(createGalleryItem);
  galleryList.append(...galleryMarkup);
};

renderGallery(galleryItems);
