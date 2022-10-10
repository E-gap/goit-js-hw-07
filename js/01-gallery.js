import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');



const newGallery = galleryItems.map(({ preview, original, description}) => 
    `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`)
    .join("");



gallery.insertAdjacentHTML('afterbegin', newGallery);

const onGalleryClickOpen = (event) => {
    event.preventDefault();
    if (event.target.classList.contains("gallery__image")) {
        
        const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width = "1280">`)

        instance.show();

        gallery.addEventListener('keydown', onGalleryClickClose, {once: true});
        function onGalleryClickClose(event) {
            if (event.code === "Escape") {        
                
                instance.close();
                    
            }
        }
    }
}

    gallery.addEventListener('click', onGalleryClickOpen); 

    