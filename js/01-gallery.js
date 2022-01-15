import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(createItemGallery).join("");

galleryRef.insertAdjacentHTML('beforeend',galleryMarkup);
galleryRef.addEventListener("click", galleryClick);


function galleryClick (event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return;
    }

    elem.innerHTML = htmlValue(event.target.dataset.source);
    instance.show();
   
    if (instance.visible()) {  
        galleryRef.addEventListener("keydown", event => {
            if (event.code === "Escape") {
                instance.close();
                galleryRef.removeEventListener("keydown", event);
            }
        });
        
    }
};

const instance = basicLightbox.create('');

const elem = instance.element();

function htmlValue(imgSrc) {
    return `
    <img src="${imgSrc}" width="800" height="600">
    `
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


