import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = `
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" /
    src="${item.preview}"
    alt="${item.description}" /></a>`;
  gallery.insertAdjacentHTML("beforeend", galleryItem);
});
document.querySelector(".gallery").onclick = (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(
    `
        <img width="1400" height="900" src="${event.target.dataset.source}">
    `
  );
  instance.show();
};

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDeley: 250,
});
