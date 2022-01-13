import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

galleryRef.insertAdjacentHTML('beforeend',galleryMarkup);
galleryRef.addEventListener("click", galleryClick);

function galleryClick (event) {
    event.preventDefault();
    
    const isGalleryImg = event.target.classList.contains("gallery__image");
    if (!isGalleryImg) {
        return;
    }
   
    const imgEl = event.target;

    const instance = basicLightbox.create(`
    <img src="${imgEl.dataset.source}" width="800" height="600">`);
    instance.show();

    if (instance.visible()) {  
        galleryRef.addEventListener("keydown", event => {
            if (event.code === "Escape") { instance.close(); }
        });
    }
};

function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}"> 
        <img class="gallery__image"
        src="${preview}"
        alt="${description}"
        data-source="${original}"   
        />
        </a>
      </div>
        ` ;
    })
    .join("");
}
