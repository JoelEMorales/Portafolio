
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.cards__kills');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.99 // Umbral para observar cuando el siguiente elemento cubre al anterior al 99%
    };

    elements.forEach((el, index) => {
        if (index < elements.length - 1) {
            const nextEl = elements[index + 1];

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.target === nextEl && entry.intersectionRatio > 0.99) {
                        el.classList.add('scaled');
                        el.style.transform = 'scale(0.8)';
                        el.style.top = `${200 + (index + 1) * 20}px`; // Sumar 20px por cada índice
                    } else {
                        el.classList.remove('scaled');
                        el.style.transform = 'scale(1)';
                        el.style.top = '200px'; // Valor inicial ajustado
                    }
                });
            }, observerOptions);

            observer.observe(nextEl);
        }
    });
});




//SLIDER EJE X


document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.querySelector('.slide__track_L');
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;

    // Clonamos los elementos para tener una copia completa del set
    for (let i = 0; i < slideCount; i++) {
        const clone = slides[i].cloneNode(true);
        sliderTrack.appendChild(clone);
    }

    // Aseguramos que la animación ocupe el espacio necesario
    const totalSlides = document.querySelectorAll('.slide').length;
    const slideWidth = slides[0].offsetWidth + 24; // including gap
    const trackWidth = totalSlides * slideWidth;

    sliderTrack.style.width = `${trackWidth}px`;
});

document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.querySelector('.slide__track_R');
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;

    // Clonamos los elementos para tener una copia completa del set
    for (let i = 0; i < slideCount; i++) {
        const clone = slides[i].cloneNode(true);
        sliderTrack.appendChild(clone);
    }

    // Aseguramos que la animación ocupe el espacio necesario
    const totalSlides = document.querySelectorAll('.slide').length;
    const slideWidth = slides[0].offsetWidth + 24; // including gap
    const trackWidth = totalSlides * slideWidth;

    sliderTrack.style.width = `${trackWidth}px`;
});







//SLIDER EJE Y


document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.querySelector('.slide__track_proyect');
    const slides = document.querySelectorAll('.slide_img');
    const slideCount = slides.length;

    // Clonamos los elementos para tener una copia completa del set
    for (let i = 0; i < slideCount; i++) {
        const clone = slides[i].cloneNode(true);
        sliderTrack.appendChild(clone);
    }

    // Aseguramos que la animación ocupe el espacio necesario
    const totalSlides = document.querySelectorAll('.slide_img').length;
    const slideWidth = slides[0].offsetWidth + 24; // including gap
    const trackWidth = totalSlides * slideWidth;

    sliderTrack.style.width = `${trackWidth}px`;
});
