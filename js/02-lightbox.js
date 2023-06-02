import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', markup);

const markup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    (acc += `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`),
''
);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});