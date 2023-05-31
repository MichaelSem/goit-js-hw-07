import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const list = document.querySelector(".gallery");

const markup = galleryItems
  .map((image) => `<li>
    <a  class="gallery__link" href="${image.original}">
        <img class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}">
    </a>
  </li>`)
  .join("");
list.insertAdjacentHTML("beforeend", markup);