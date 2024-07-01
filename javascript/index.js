




// STICKY TRANSITION
// document.addEventListener("DOMContentLoaded", () => {
//     const stickyItems = document.querySelectorAll('.cards__kills');

//     window.addEventListener('scroll', () => {
//         stickyItems.forEach((item, index) => {
//             const itemTop = item.getBoundingClientRect().top;
//             const viewportHeight = window.innerHeight;

//             if (itemTop < viewportHeight) {
//                 item.style.transform = 'scale(0.6)'; // Achicar el div
//             } else {
//                 item.style.transform = 'scale(1)'; // Restaurar el tamaño original
//             }
//         });
//     });
// });










// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM completamente cargado y analizado');
//     const stickies = document.querySelectorAll('.cards__kills');
//     console.log('Elementos sticky:', stickies);

//     let topOffset = 230; // Valor inicial ajustado
//     let lastStickyIndex = -1; // Para rastrear el último elemento que se fijó

//     window.addEventListener('scroll', () => {
//         console.log('Scroll detectado');

//         // Restaurar todos los elementos a su estado original antes de verificar de nuevo
//         // stickies.forEach(sticky => {
//         //     sticky.style.top = '230px'; // Valor inicial ajustado
//         //     sticky.style.transform = 'scale(1)';
//         // });

//         // Reiniciar las variables de control
//         topOffset = 230;
//         lastStickyIndex = -1;

//         // Volver a verificar la posición de los elementos al hacer scroll
//         stickies.forEach((sticky, index) => {
//             const stickyRect = sticky.getBoundingClientRect();
//             const isStuck = stickyRect.top <= topOffset;

//             if (isStuck && index > lastStickyIndex) {
//                 lastStickyIndex = index; // Actualiza el índice del último elemento fijado
//                 sticky.style.top = `${topOffset}px`;
//                 sticky.style.transform = 'scale(0.7)';
//                 topOffset += 20; // Aumentamos el topOffset para el siguiente elemento
//                 console.log(`Sticky ${index + 1} se fija en top: ${topOffset}px y se escala a 0.7`);
//             } else {
//                 sticky.style.top = '230px'; // Valor inicial ajustado
//                 sticky.style.transform = 'scale(1)';
//             }
//         });
//     });
// });




document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado y analizado');
    const stickies = document.querySelectorAll('.cards__kills');
    console.log('Elementos sticky:', stickies);


    let topOffset = 200; // Valor inicial ajustado
    let topOnset = 280; // Valor final ajustado
    let lastStickyIndex = -1; // Para rastrear el último elemento que se fijó
    let ultimo = 0;

    console.log('el top es:', topOffset, 'y el elemento es:', lastStickyIndex);
    

    window.addEventListener('scroll', () => {
        // console.log('Scroll detectado');

        stickies.forEach((sticky, index) => {
            const stickyRect = sticky.getBoundingClientRect();

            ultimo += stickies.length - 1;

            if (topOffset == 280) {

                return console.log('no pasa nada');

            } else if (topOffset > 280 && index > lastStickyIndex ) {

                lastStickyIndex = index - 1;
                sticky.style.top = '230px'; // Valor inicial ajustado
                sticky.style.transform = 'scale(1)';

            }else if (stickyRect.top <= topOffset && index > lastStickyIndex) {
                
                lastStickyIndex = index; // Actualiza el índice del último elemento fijado
                sticky.style.top = `${topOffset}px`;
                topOffset += 20; // Aumentamos el topOffset para el siguiente elemento
                sticky.style.transform = 'scale(0.7)';

            }

        });
        console.log('el top es:', topOffset, 'y el elemento es:', lastStickyIndex);
        console.log('el ultimo elemento es:', ultimo);
    });
});

// else if (stickyRect.top = topOnset) {
//     sticky.style.top = '230px'; // Valor inicial ajustado
//     sticky.style.transform = 'scale(1)';
// }



//SLIDER


document.addEventListener("DOMContentLoaded", function() {
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

document.addEventListener("DOMContentLoaded", function() {
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