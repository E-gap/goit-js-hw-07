import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);



const gallery = document.querySelector('.gallery');



const newGallery = galleryItems.map(({ preview, original, description}) => 
    `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} title="подпись"/>
</a>`)
    .join("");

gallery.insertAdjacentHTML('afterbegin', newGallery);


const onGalleryClickOpen = (event) => {
    event.preventDefault();
    if (event.target.classList.contains("gallery__image")) {
        const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});
        
        
    }
                    
}      
    gallery.addEventListener('click', onGalleryClickOpen); 
