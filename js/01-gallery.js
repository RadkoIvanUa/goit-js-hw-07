import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

function createGalleryMarkup(obj) {
  return galleryItems
    .map(
      ({ original, preview, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
        </a>
    </li>`
    )
    .join("");
}

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.gallery.innerHTML = galleryMarkup;

refs.gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  const { target } = evt;
  if (!target.classList.contains("gallery__image")) {
    return;
  }
  
  const largeImageUrl = target.dataset.source;
  const alt = target.alt.value;
  const instance = basicLightbox.create(
    `<img src="${largeImageUrl}" alt="${alt}">`
  );
  
  instance.show();

  document.addEventListener("keydown", onKeyPress);
  function onKeyPress(evt) {
    if (evt.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onKeyPress);
    }
  }
}
