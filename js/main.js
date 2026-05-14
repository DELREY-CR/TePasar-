
// Clase de JS: control de velocidad del video del hero
document.querySelector('.hero__video').playbackRate = 0.6;

const carruselElement = document.querySelector('.carrusel-posters');

// Inicializar Swiper para el carrusel de posters
const swiperCarrusel = new Swiper(carruselElement, {
    loop: true,
    watchOverflow: false,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    navigation: {
        nextEl: '.carrusel-next',
        prevEl: '.carrusel-prev',
    },
    effect: 'slide',
    speed: 800,
    grabCursor: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    breakpoints: {
        640: {
            spaceBetween: 28,
        },
        1024: {
            spaceBetween: 56,
        },
    },
});

