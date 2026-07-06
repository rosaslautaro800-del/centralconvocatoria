// =============================
// ELEMENTOS
// =============================

const intro = document.getElementById("intro");
const videoSection = document.getElementById("videoSection");
const video = document.getElementById("videoIntro");
const convocatoria = document.getElementById("convocatoria");
const musica = document.getElementById("musica");
const ingresarBtn = document.getElementById("ingresarBtn");

// =============================
// INGRESAR
// =============================

ingresarBtn.addEventListener("click", () => {

    // Mostrar el video
    videoSection.classList.add("active");

    // Ocultar la intro
    intro.style.display = "none";

    // Reiniciar por si vuelven a entrar
    video.currentTime = 0;

    // Reproducir el video
    video.play();

});

// =============================
// CUANDO TERMINA EL VIDEO
// =============================

video.addEventListener("ended", () => {

    // Ocultar video
    videoSection.classList.remove("active");
    videoSection.style.display = "none";

    // Mostrar convocatoria
    convocatoria.style.display = "flex";

    // Empezar la música
    musica.currentTime = 0;
    musica.play();

    // Ir arriba de la página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
