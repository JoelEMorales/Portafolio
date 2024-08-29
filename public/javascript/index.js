
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






document.addEventListener("DOMContentLoaded", function () {
    // Función general para configurar sliders
    const setupSlider = (trackSelector, slideSelector, gap = 24, axis = 'X') => {
        const sliderTrack = document.querySelector(trackSelector);
        const slides = document.querySelectorAll(slideSelector);
        const slideCount = slides.length;

        if (sliderTrack && slideCount > 0) {
            // Clonamos los elementos
            for (let i = 0; i < slideCount; i++) {
                const clone = slides[i].cloneNode(true);
                sliderTrack.appendChild(clone);
            }

            // Aseguramos el tamaño del track
            const totalSlides = document.querySelectorAll(slideSelector).length;
            const slideSize = axis === 'X' ? slides[0].offsetWidth : slides[0].offsetHeight;
            const trackSize = totalSlides * (slideSize + gap);

            // Ajustamos la medida según el eje
            if (axis === 'X') {
                sliderTrack.style.width = `${trackSize}px`;
            } else {
                sliderTrack.style.height = `${trackSize}px`;
            }
        }
    };


    //SLIDER EJE X

    // Configuramos sliders para diferentes elementos y ejes
    setupSlider('.slide__track_L', '.slide', 24, 'X');
    setupSlider('.slide__track_R', '.slide', 24, 'X');
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




// COPIAR EN PORTAPAPELES   
document.querySelectorAll('.boton-copiar').forEach(boton => {
    boton.addEventListener('click', async (event) => {
        const targetId = boton.getAttribute('data-target'); // Obtener el ID del div a copiar
        const texto = document.getElementById(targetId).innerHTML; // Obtener el texto del div

        try {
            await navigator.clipboard.writeText(texto); // Copiar al portapapeles
            console.log(`Contenido del div ${targetId} copiado al portapapeles`);
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    });
});




// Obtener las credenciales desde el backend
fetch('http://localhost:3000/emailjs-credentials')
  .then(response => response.json())
  .then(credentials => {
    emailjs.init(credentials.publicKey);

    const form = document.getElementById('contact_form');
    const sendButton = document.getElementById('send_button');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      sendButton.value = 'Cargando...';

      emailjs.sendForm(credentials.serviceID, credentials.templateID, this)
        .then(() => {
          sendButton.value = 'Enviar Correo';
          alert('Mensaje Enviado!');
        }, (error) => {
          sendButton.value = 'Enviar Correo';
          alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
    });
  });