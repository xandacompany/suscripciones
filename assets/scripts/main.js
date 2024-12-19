//Función para abrir el menú del celular
function abrir_menu() {
    document.getElementById('menu_celular').style.display = 'flex';
}





//Función para cerrar el menú del celular
function cerrar_menu() {
    document.getElementById('menu_celular').style.display = 'none';
}

const menuItems = document.querySelectorAll('.nav-1-ul .nav-1-li a');

const contenedorMenu = document.querySelector('.contenedor-menu-celular-main');

contenedorMenu.innerHTML = '';

menuItems.forEach(item => {
    // Crea el div contenedor de la opción
    const div = document.createElement('div');
    div.classList.add('menu-celular-opciones');
    
    const p = document.createElement('p');
    
    p.textContent = item.textContent;

    div.appendChild(p);
    
    contenedorMenu.appendChild(div);
});





// Función para manejar la visibilidad del menú en función del tamaño de la ventana
function ajustarMenu() {
    const menuCelular = document.getElementById('menu_celular');
    
    if (window.innerWidth > 800) {
        // Si la ventana es más grande que 800px, ocultamos el menú
        menuCelular.style.display = 'none';
    } else {
        // Si la ventana es menor o igual a 800px, dejamos el menú según el estado de la variable
        if (menuCelular.style.display === 'flex') {
            // Si el menú está visible, lo mantenemos visible
            menuCelular.style.display = 'flex';
        } else {
            // Si no está visible, lo dejamos oculto
            menuCelular.style.display = 'none';
        }
    }
}

ajustarMenu();

window.addEventListener('resize', ajustarMenu);





// Script para el el botón que te manda al inicio de la página (hasta arriba)
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

if (scrollToTopBtn) {  // Verifica si el botón realmente existe
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.classList.add("show"); // Muestra el botón con transición
        } else {
            scrollToTopBtn.classList.remove("show"); // Lo oculta con transición
        }
    };
}





// Función para hacer scroll al inicio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}





// Script para la cuenta regresiva
const duration = 3 * 60 * 60 * 1000;

// Obtenemos el tiempo de expiración guardado en localStorage o inicializamos uno nuevo
let endTime = localStorage.getItem('endTime');

// Si no existe 'endTime', lo configuramos para que dure 3 horas desde el momento actual
if (!endTime) {
    endTime = Date.now() + duration;
    localStorage.setItem('endTime', endTime);
}

// Función para actualizar el contador
function updateCountdown() {
    const now = Date.now();
    let timeRemaining = endTime - now;

    if (timeRemaining <= 0) {
        endTime = Date.now() + duration;
        localStorage.setItem('endTime', endTime);
        timeRemaining = duration;
    }

    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

    setTimeout(updateCountdown, 1000);
}

updateCountdown();





// Obtener la imagen principal y todas las tarjetas
const imagenPrincipal = document.getElementById("imagen-principal");
const tarjetas = document.querySelectorAll(".contenedor-superpuesto-1 .tarjeta-1");

// Añadir el evento 'hover' a cada tarjeta
tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("mouseenter", function() {
        // Cambiar la imagen principal al valor almacenado en el atributo 'data-imagen'
        const nuevaImagen = tarjeta.getAttribute("data-imagen");
        imagenPrincipal.src = nuevaImagen;
    });

    // Restaurar la imagen original cuando el mouse sale de la tarjeta
    tarjeta.addEventListener("mouseleave", function() {
        imagenPrincipal.src = "assets/images/imagen-1.webp";  // Imagen original
    });
});





// Incremento del valor de los números en las tarjetas
function animateNumbers() {
    // Seleccionamos únicamente los elementos con la clase 'animar-numero'
    const elements = document.querySelectorAll('.animar-numero');

    elements.forEach(el => {
        const targetValue = parseInt(el.getAttribute('data-value'), 10);
        const suffix = el.getAttribute('data-suffix') || ""; // Obtiene el sufijo, si lo hay
        let currentValue = 0;
        const duration = 2000; // Duración de la animación en milisegundos
        const increment = targetValue / (duration / 16); // Incremento en cada frame (~16ms)

        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(interval);
            }
            el.textContent = Math.floor(currentValue) + suffix; // Añade el sufijo al texto
        }, 16); // Aproximadamente 60 FPS
    });
}

// Configurar el Intersection Observer
const options = {
    root: null, // El root es el viewport (lo que ve el usuario)
    rootMargin: '0px',
    threshold: 0.5 // La animación se activa cuando el 50% del elemento es visible
};

// Función de callback que se ejecuta cuando el elemento entra en el viewport
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers(); // Ejecuta la animación cuando el elemento es visible
            observer.unobserve(entry.target); // Deja de observar el elemento para evitar animaciones múltiples
        }
    });
};

// Crear el observer
const observer = new IntersectionObserver(callback, options);

// Seleccionar las tarjetas a observar
const tarjetasElements = document.querySelectorAll('.tarjeta-numeros');

// Comenzar a observar los elementos
tarjetasElements.forEach(tarjeta => {
    observer.observe(tarjeta);
});





// Desplegables
function desplegar_1() {
    const agrupacion = document.getElementById('agrupacion-1');
    const flecha = document.getElementById('flecha-1');
    const titulo = document.getElementById('titulo-agrupacion-1');

    if (agrupacion.style.display === 'flex') {
        // Ocultar agrupación y restaurar flecha-1
        agrupacion.style.display = 'none';
        flecha.style.transform = 'rotate(0deg)';
        titulo.style.color = '#000000';
    } else {
        // Mostrar agrupación y rotar flecha-1
        agrupacion.style.display = 'flex';
        flecha.style.transform = 'rotate(180deg)';
        titulo.style.color = '#FF000B';
    }
}

function desplegar_2() {
    const agrupacion = document.getElementById('agrupacion-2');
    const flecha = document.getElementById('flecha-2');
    const titulo = document.getElementById('titulo-agrupacion-2');

    if (agrupacion.style.display === 'flex') {
        // Ocultar agrupación y restaurar flecha-2
        agrupacion.style.display = 'none';
        flecha.style.transform = 'rotate(0deg)';
        titulo.style.color = '#000000';
    } else {
        // Mostrar agrupación y rotar flecha-2
        agrupacion.style.display = 'flex';
        flecha.style.transform = 'rotate(180deg)';
        titulo.style.color = '#FF000B';
    }
}

function desplegar_3() {
    const agrupacion = document.getElementById('agrupacion-3');
    const flecha = document.getElementById('flecha-3');
    const titulo = document.getElementById('titulo-agrupacion-3');

    if (agrupacion.style.display === 'flex') {
        // Ocultar agrupación y restaurar flecha-2
        agrupacion.style.display = 'none';
        flecha.style.transform = 'rotate(0deg)';
        titulo.style.color = '#000000';
    } else {
        // Mostrar agrupación y rotar flecha-2
        agrupacion.style.display = 'flex';
        flecha.style.transform = 'rotate(180deg)';
        titulo.style.color = '#FF000B';
    }
}