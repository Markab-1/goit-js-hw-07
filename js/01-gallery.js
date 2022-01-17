import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(createItemGallery).join("");

galleryRef.insertAdjacentHTML('beforeend',galleryMarkup);
galleryRef.addEventListener("click", galleryClick);

    let instance = null;

function galleryClick (event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return;
    }

    instance = lightboxCreation(event.target.dataset.source);
    instance.show();
};

function lightboxCreation(source) {
    return basicLightbox.create(
        `<img src="${source}" width="800" height="600"/>`,
        {
            onShow: () => document.addEventListener("keydown", onCloseModal),
            onClose: () => document.removeEventListener("keydown", onCloseModal),
        });
}

function onCloseModal(event) {
        if (event.key === "Escape") {
      instance.close();
        }
        return;
    }

function createItemGallery(item) {
     return `
      <div class="gallery__item">
        <a class="gallery__link" href="${item.original}"> 
        <img class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
        data-source="${item.original}"   
        />
        </a>
      </div>
      `
}


