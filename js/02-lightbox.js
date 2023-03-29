import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

function createGalleryMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    )
    .join("");
}

refs.gallery.innerHTML = createGalleryMarkup(galleryItems);
refs.gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  const { target } = evt;
  if (!target.classList.contains("gallery__image")) {
    return;
  }

  let lightbox = new SimpleLightbox(".gallery a");
}
