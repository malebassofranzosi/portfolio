// --- LÓGICA DEL PANEL DE INFO (REVISADA) ---
const infoBtn = document.getElementById('info-btn');
const closeInfoBtn = document.getElementById('close-info'); // Armonizado con el nuevo HTML
const infoPanel = document.getElementById('info-panel');

// Función para abrir/cerrar el panel
infoBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Evitamos que el enlace recargue la página
    infoPanel.classList.add('open');
});

// Función para cerrar el panel
closeInfoBtn.addEventListener('click', () => {
    infoPanel.classList.remove('open');
});

// (Mantené aquí abajo la lógica del Slider Full-screen que te pasé antes)

// --- LÓGICA DEL SLIDER FULL-SCREEN ---
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next-slide');
const prevBtn = document.getElementById('prev-slide');
let currentIndex = 0; // Imagen actual

function showSlide(index) {
    // Primero, ocultamos todas las diapositivas
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Mostramos solo la que corresponde al índice actual
    slides[index].classList.add('active');
}

// Botón Siguiente
nextBtn.addEventListener('click', () => {
    currentIndex++; // Aumentamos el índice
    // Si llegamos al final, volvemos a la primera
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
});

// Botón Anterior
prevBtn.addEventListener('click', () => {
    currentIndex--; // Disminuimos el índice
    // Si estamos en la primera y vamos hacia atrás, vamos a la última
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
});