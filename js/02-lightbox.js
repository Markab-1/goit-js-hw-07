import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = createGallery(galleryItems);

galleryRef.insertAdjacentHTML('beforeend',galleryMarkup);

new SimpleLightbox('.gallery a',
        {
            close: true,
            animationSpeed: 250,
            captionsData: "alt",
            captionDelay: 250,
        });


function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    alt="${description}" />
    </a>
        ` ;
    })
    .join("");
}
