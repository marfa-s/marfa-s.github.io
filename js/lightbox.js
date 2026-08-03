function initLightbox() {

    const images = document.querySelectorAll(

        '.hero img,.author img,.text-box img'

    );



    const lightbox = document.querySelector('.lightbox');

    const preview = lightbox.querySelector('img');



    images.forEach(image => {

        image.addEventListener('click', () => {

            preview.src = image.src;

            preview.alt = image.alt;

            lightbox.classList.add('active');

        });

    });



    lightbox.addEventListener('click', (e) => {
 if (e.target.classList.contains('lightbox')) {   
            lightbox.classList.remove('active');
  }
    });



    document.addEventListener('keydown', e => {

        if (e.key === 'Escape') {

            lightbox.classList.remove('active');

        }

    });

}
